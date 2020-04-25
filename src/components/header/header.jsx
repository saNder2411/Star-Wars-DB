import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import './header.css';

const PagesPathname = {
  HOME: `/`,
  PEOPLE: `/people/`,
  PLANETS: `/planets/`,
  STARSHIPS: `/starships/`,
  SECRET: `/secret`,
  LOGIN: `/login`,
};

const Header = ({onServiceChange, location}) => {
  const {pathname} = location;

  return (
    <nav className="header navbar navbar-expand-lg navbar-dark bg-dark d-flex">
      <ul className="navbar-nav">
        <li className={`nav-item ${PagesPathname.HOME === pathname ? `active` : ``}`}>
          <Link className="navbar-brand nav-item nav-link" to="/">Star Wars DB</Link>
        </li>
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
    </nav>
  );
};

Header.propTypes = {onServiceChange: PropTypes.func.isRequired};

export default withRouter(Header);