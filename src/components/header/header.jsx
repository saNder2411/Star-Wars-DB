import React, {memo} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './header.css';


const Header = ({onServiceChange}) => {

  return (
    <nav className="header d-flex navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand nav-item nav-link active" to="/">Star Wars DB</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/people/">People</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/planets/">Planets</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/starships/">Starships</Link>
          </li>
        </ul>
        <button className="btn btn-warning btn-sm" onClick={onServiceChange}>
          Change Service
        </button>
      </div>
    </nav>
  );
};

Header.propTypes = {onServiceChange: PropTypes.func.isRequired};

export default memo(Header);