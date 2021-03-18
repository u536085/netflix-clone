import React from 'react';
import { NavLink } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  return(
    <nav className="Nav-wrapper red darken-3">
      <div className="container">
        <NavLink className="logo left" to=''>Netgeenflix</NavLink>
        <ul className="left">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/series">Series</NavLink></li>
          <li><NavLink to="/films">Films</NavLink></li>
          <li><NavLink to="/newandpopular">New And Popular</NavLink></li>
          <li><NavLink to="/mylist">My List</NavLink></li>
        </ul>
      </div>
      <span>
      <NavLink to="" className="right"><FontAwesomeIcon icon={faSearch} /></NavLink>
      </span>
    </nav>
  )
}

export default NavBar;
