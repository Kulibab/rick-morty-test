import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';


import classes from './Filters.module.scss'
import { Input, MenuItem, Select } from '@material-ui/core';


const Filters = ({ setFilters, fromChar = false, fromEp = false, fromLoc = false, setCurrentPage }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');
  const [dimension, setDimension] = useState('');

  const applyFilters = () => {
    setFilters({
      name,
      status,
      species,
      type,
      gender,
      dimension
    })
    setCurrentPage(1);
  }

  useEffect(() => {
    applyFilters()
  }, [ status, gender ])

  return (
    <div className={classes.filters}>
      <label className={classes.label}> Name:
        <Input
          className={classes.inp} 
          disableUnderline={true} 
          value={name} 
          onChange={({target}) => setName(target.value)} 
          onBlur={applyFilters}
          onKeyDown={({ key, target }) => {
            if (key === 'Enter') {
              target.blur()
            }
          }}
          />
      </label>
      <label className={classes.label}> Status:
        <Select
          className={classes.sel}
          disableUnderline={true}
          value={status} onChange={({target}) => { setStatus(target.value)}}>
          <MenuItem value='' selected>Any</MenuItem>
          <MenuItem value='alive'>alive</MenuItem>
          <MenuItem value='dead'>dead</MenuItem>
          <MenuItem value='unknown'>unknown</MenuItem>
        </Select>
      </label>
      <label className={classes.label}> Species:
        <Input
          className={classes.inp} 
          disableUnderline={true} 
          value={species} 
          onChange={({target}) => setSpecies(target.value)} 
          onBlur={applyFilters}
          onKeyDown={({ key, target }) => {
            if (key === 'Enter') {
              target.blur()
            }
          }}
          />
      </label>
      <label className={classes.label}> Type:
        <Input
          className={classes.inp} 
          disableUnderline={true} 
          value={type} 
          onChange={({target}) => setType(target.value)} 
          onBlur={applyFilters}
          onKeyDown={({ key, target }) => {
            if (key === 'Enter') {
              target.blur()
            }
          }}
          />
      </label>
      <label className={classes.label}> Gender:
        <Select
          className={classes.sel}
          disableUnderline={true}
          value={gender} 
          onChange={({target}) => setGender(target.value)}
          >
          <MenuItem value=''>Any</MenuItem>
          <MenuItem value='female'>female</MenuItem>
          <MenuItem value='male'>male</MenuItem>
          <MenuItem value='genderless'>genderless</MenuItem>
          <MenuItem value='unknown'>unknown</MenuItem>
        </Select>
      </label>
      <label className={classes.label}> Dimension:
        <Input
          className={classes.inp} 
          disableUnderline={true} 
          value={dimension} 
          onChange={({target}) => setDimension(target.value)} 
          onBlur={applyFilters}
          onKeyDown={({ key, target }) => {
            if (key === 'Enter') {
              target.blur()
            }
          }}
          />
      </label>
    </div>
  );
};

Filters.propTypes = {
  setFilters: PropTypes.func,
  setCurrentPage: PropTypes.func
};

export default Filters;
