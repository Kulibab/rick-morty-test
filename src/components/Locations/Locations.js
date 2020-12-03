import React, { useEffect, useState } from 'react';
import { locationsAPI } from '../../apiRuquests/apiRequests';
import Filters from '../UI/Filters/Filters';
import classes from './Locations.module.scss';
import Table from '../UI/Table/Table';
import Paginator from '../UI/Paginator/Paginator';

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({});
  const [lastPage, setLastPage] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        let { results, info } = await locationsAPI.getLocations(currentPage, filters);
        setLocations(results);
        setLastPage(info.pages)
      } catch (e) {
        console.log(e)
        setLocations([]);
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
        byType
        byDimension
      />
      <Table data={locations} />
      <Paginator
        lastPage={lastPage}
        currentPage={currentPage}
        onChange={setCurrentPage}
      />
    </div>
  )
}

export default Locations;
