import React from 'react';
import PropTypes from 'prop-types';
import './header.css';


const Header = ({onServiceChange}) => {

  return (
    <nav className="header d-flex navbar navbar-expand-lg navbar-dark bg-info">
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
        <button className="btn btn-success btn-sm" onClick={onServiceChange}>
          Change Service
        </button>
      </div>
    </nav>
  );
};

Header.propTypes = {onServiceChange: PropTypes.func.isRequired};

export default Header;