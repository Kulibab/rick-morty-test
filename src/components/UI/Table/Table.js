import React from 'react';
import ShowCard from './ShowCard/ShowCard';
import classes from './Table.module.scss';

const Table = ({data}) => {

  return (
    <div className={classes.showCardWrap}>
    {data.map(({ name, id, air_date, episode, type, dimension }) => (
        <ShowCard
          name={name}
          key={id}
          air_date={air_date}
          id={id}
          episode={episode}
          type={type}
          dimension={dimension}
        />
      ))}
  </div>
  )
}

export default Table;
