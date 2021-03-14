import React from 'react';

const NavBar = () => {
  return(
    <nav className="Nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo left">Netgeenflix</a>
        <ul className="right">
          <li><a href="/">Home</a></li>
          <li><a href="/series">Series</a></li>
          <li><a href="/films">Films</a></li>
          <li><a href="/newandpopular">New And Popular</a></li>
          <li><a href="/mylist">My List</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;
