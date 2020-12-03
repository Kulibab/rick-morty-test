import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';


import classes from './Filters.module.scss'
import { Input, MenuItem, Select } from '@material-ui/core';
import { doubleValue } from '../../../helpers/helpers';


const Filters = ({ setFilters, byName, byStatus, bySpecies, byType, byGender, byDimension, bySeason, byEpisode, setCurrentPage }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [species, setSpecies] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');
  const [dimension, setDimension] = useState('');
  const [season, setSeason] = useState('');
  const [episode, setEpisode] = useState('');

  const episodesFilter = () => {
    let querry = '';
    querry += season? 'S' + doubleValue(season): '';
    querry += episode? 'E' + doubleValue(episode): '';

    return querry;
  }

  const applyFilters = () => {
    setFilters({
      name,
      status,
      species,
      type,
      gender,
      dimension,
      episode: episodesFilter(),
    })
    setCurrentPage(1);
  }

  useEffect(() => {
    applyFilters()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ status, gender ])

  return (
    <div className={classes.filters}>
      {byName && <label className={classes.label}> Name:
        <Input
          className={classes.inp}
          placeholder='Name' 
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
      </label>}
      {byStatus && <label className={classes.label}> Status:
        <Select
          className={classes.sel}
          disableUnderline={true}
          value={status} onChange={({target}) => { setStatus(target.value)}}>
          <MenuItem value=''>Any</MenuItem>
          <MenuItem value='Alive'>Alive</MenuItem>
          <MenuItem value='Dead'>Dead</MenuItem>
          <MenuItem value='Unknown'>Unknown</MenuItem>
        </Select>
      </label>}
      {bySpecies && <label className={classes.label}> Species:
        <Input
          className={classes.inp}
          placeholder='Species' 
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
      </label>}
      {byType && <label className={classes.label}> Type:
        <Input
          className={classes.inp} 
          placeholder='Type'
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
      </label>}
      {byGender && <label className={classes.label}> Gender:
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
      </label>}
      {byDimension && <label className={classes.label}> Dimension:
        <Input
          className={classes.inp} 
          placeholder='Dimension'
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
      </label>}
      {bySeason && <label className={classes.label}> Season:
        <Input
          className={classes.inp} 
          placeholder='Season'
          disableUnderline={true} 
          value={season} 
          onChange={({target}) => setSeason(target.value)} 
          onBlur={applyFilters}
          onKeyDown={({ key, target }) => {
            if (key === 'Enter') {
              target.blur()
            }
          }}
          />
      </label>}
      {byEpisode && <label className={classes.label}> Episode:
        <Input
          className={classes.inp} 
          placeholder='Episode'
          disableUnderline={true} 
          value={episode} 
          onChange={({target}) => setEpisode(target.value)} 
          onBlur={applyFilters}
          onKeyDown={({ key, target }) => {
            if (key === 'Enter') {
              target.blur()
            }
          }}
          />
      </label>}
    </div>
  );
};

Filters.propTypes = {
  setFilters: PropTypes.func,
  setCurrentPage: PropTypes.func
};

export default Filters;
