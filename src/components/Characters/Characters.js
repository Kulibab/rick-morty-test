import React, { useEffect, useState } from 'react';
import { charactersAPI } from '../../apiRuquests/apiRequests';
import { isOdd } from '../../helpers/helpers';
import Filters from '../common/Filters/Filters';
import ShowCard from '../common/ShowCard/ShowCard';
import classes from './Characters.module.scss';
import Pagination from '@material-ui/lab/Pagination';

const Characters = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [lastPage, setLastPage] = useState();

  useEffect((prev) => {
    const getData = async () => {
      try {
        let { results, info } = await charactersAPI.getCharacters(currentPage, filters);
        let newEpisodes = isOdd(currentPage) ? results.slice(10): results.slice(0, 10);
        setEpisodes(newEpisodes);
        setLastPage(Math.ceil(info.count / 10))
      } catch (e) {
        console.log(e)
        setEpisodes([]);
      }
    }

    getData();

  }, [currentPage, filters])

  return (
    <div className={classes.wrap}>
      <title>Characters</title>
      <Filters 
        setFilters={setFilters} 
        setCurrentPage={setCurrentPage}
        />
      <div className={classes.showCardWrap}>
        {episodes.map(({ name, image, species, id }) => (
            <ShowCard
              title={name}
              imgURL={image}
              species={species}
              key={id}
              id={id}
            />
          ))}
      </div>
      <Pagination 
        className={classes.pagin}
        count={lastPage} 
        page={currentPage} 
        onChange={(e, val) => setCurrentPage(val)} 
        color='primary'
        shape="rounded"
        />
    </div>
  )
}

export default Characters;
