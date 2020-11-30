import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

const Header = () => {


  return (
    <div className={classes.nav}>
      <nav className={classes.container}>
        <div className={classes.item}>
          <NavLink to='/characters' activeClassName={classes.active}>Characters</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/episodes' activeClassName={classes.active}>Episodes</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/locations' activeClassName={classes.active}>Locations</NavLink>
        </div>
        <div className={classes.item}>
          <NavLink to='/my-watch-list' activeClassName={classes.active}>My watch list</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Header;
