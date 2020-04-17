import React from 'react';
import './header.css';

const Header = () => {
  return (
    <nav className="header d-flex navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">Star Wars DB</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/people">People</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/planets">Planets</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/starships">Starships</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;