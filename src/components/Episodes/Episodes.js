import React, { useEffect, useState } from 'react';
import { episodesAPI } from '../../apiRuquests/apiRequests';
import Filters from '../UI/Filters/Filters';
import classes from './Episodes.module.scss';
import Table from '../UI/Table/Table';
import Paginator from '../UI/Paginator/Paginator';

const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [lastPage, setLastPage] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        let { results, info } = await episodesAPI.getEpisodes(currentPage, filters);
        setEpisodes(results);
        setLastPage(info.pages)
      } catch (e) {
        console.log(e)
        setEpisodes([]);
      }
    }

    getData();

  }, [currentPage, filters])

  return (
    <div className={classes.wrap}>
      <title>Episodes</title>
      <Filters 
        setFilters={setFilters} 
        setCurrentPage={setCurrentPage}
        byName
        byEpisode
        bySeason
        />
      <Table data={episodes}/>
      <Paginator
        lastPage={lastPage}
        currentPage={currentPage}
        onChange={setCurrentPage}
      />
    </div>
  )
}

export default Episodes;
