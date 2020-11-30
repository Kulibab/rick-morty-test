import React, { useEffect, useState } from 'react';
import { charactersAPI } from '../../apiRuquests/apiRequests';
import { isOdd } from '../../helpers/helpers';
import ShowCard from '../common/ShowCard/ShowCard';
import classes from './Characters.module.scss';

const Characters = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getData = async () => {
      let { results } = await charactersAPI.getCharacters(currentPage);
      let newEpisodes = isOdd(currentPage) ? results.slice(10): results.slice(0, 10);
      setEpisodes(newEpisodes);
    }

    getData();

  }, [currentPage])

  console.log(episodes)

  return (
    <div className={classes.wrap}>
      <title>Characters</title>
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
    </div>
  )
}

export default Characters;
