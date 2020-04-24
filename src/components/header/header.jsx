import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import './header.css';

const PagesPathname = {
  PEOPLE: `/people/`,
  PLANETS: `/planets/`,
  STARSHIPS: `/starships/`,
  SECRET: `/secret`,
  LOGIN: `/login`,
};

const Header = ({onServiceChange, location}) => {
  const {pathname} = location;

  return (
    <nav className="header d-flex navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand nav-item nav-link" to="/">Star Wars DB</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className={`nav-item ${PagesPathname.PEOPLE === pathname ? `active` : ``}`}>
            <Link className="nav-link" to="/people/">People</Link>
          </li>
          <li className={`nav-item ${PagesPathname.PLANETS === pathname ? `active` : ``}`}>
            <Link className="nav-link" to="/planets/">Planets</Link>
          </li>
          <li className={`nav-item ${PagesPathname.STARSHIPS === pathname ? `active` : ``}`}>
            <Link className="nav-link" to="/starships/">Starships</Link>
          </li>
          <li className={`nav-item ${PagesPathname.SECRET === pathname ? `active` : ``}`}>
            <Link className="nav-link" to="/secret">Secret</Link>
          </li>
          <li className={`nav-item ${PagesPathname.LOGIN === pathname ? `active` : ``}`}>
            <Link className="nav-link" to="/login">Login</Link>
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

export default withRouter(Header);