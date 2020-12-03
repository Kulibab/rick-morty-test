import React, { useEffect, useState } from 'react';
import { charactersAPI } from '../../apiRuquests/apiRequests';
import { isOdd } from '../../helpers/helpers';
import Filters from '../UI/Filters/Filters';
import ListItem from './ListItem/ListItem';
import classes from './Characters.module.scss';
import Paginator from '../UI/Paginator/Paginator';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [lastPage, setLastPage] = useState();

  useEffect((prev) => {
    const getData = async () => {
      try {
        let { results, info } = await charactersAPI.getCharacters(currentPage, filters);
        let newCharacters = isOdd(currentPage) ? results.slice(10): results.slice(0, 10);
        setCharacters(newCharacters);
        setLastPage(Math.ceil(info.count / 10))
      } catch (e) {
        console.log(e)
        setCharacters([]);
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
        bySpecies
        byStatus
        byGender
        />
      <div className={classes.showCardWrap}>
        {characters.map(({ name, image, species, id, gender, status }) => (
            <ListItem
              name={name}
              image={image}
              species={species}
              gender={gender}
              key={id}
              status={status}
              id={id}
            />
          ))}
      </div>
      <Paginator
        lastPage={lastPage}
        currentPage={currentPage}
        onChange={setCurrentPage}
      />
    </div>
  )
}

export default Characters;
