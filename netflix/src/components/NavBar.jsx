import React from 'react';
import { NavLink } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  return(
    <nav className="Nav-wrapper black darken-3">
      <div className="container">
        <NavLink className="logo left" to=''>Netgeenflix</NavLink>
        <ul className="left">
          <li><NavLink id="homepage" class="navlink" to="/">Homepagina</NavLink></li>
          <li><NavLink class="navlink" to="/series">Series</NavLink></li>
          <li><NavLink class="navlink" to="/films">Films</NavLink></li>
          <li><NavLink class="navlink" to="/newandpopular">Nieuw en populair</NavLink></li>
          <li><NavLink class="navlink" to="/MyList.jsx">Mijn Lijst</NavLink></li>
        </ul>
      </div>
      <img id="kab" src="kabouter.png" />
      <span>
      <NavLink to=""  id="user" className="right"><FontAwesomeIcon icon={faBell} /></NavLink>
      <NavLink to="" className="right"><FontAwesomeIcon icon={faGift} /></NavLink>
      <NavLink className="right" id="kids" to="/newandpopular">KIDS</NavLink>
      <NavLink to="" className="right"><FontAwesomeIcon icon={faSearch} /></NavLink>
      </span>
    </nav>
  )
}

export default NavBar;
