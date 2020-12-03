import Pagination from '@material-ui/lab/Pagination';
import React from 'react';
import classes from './Paginator.module.scss';

const Paginator = ({lastPage, onChange, currentPage }) => {
  return (
    <Pagination
    className={classes.pagin}
    count={lastPage} 
    page={currentPage} 
    onChange={(e, val) => onChange(val)} 
    color='primary'
    shape="rounded"
    />
  )
}

export default Paginator;
