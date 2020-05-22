import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import './login-page.css';


const LoginPage = ({isLoggedIn, onLogin}) => {

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className="jumbotron text-center">
      <h4>Login to see secret page!</h4>
      <button
        onClick={onLogin}
        className="btn btn-primary"
        type="button">
        Login
      </button>
    </div>
  );
};

LoginPage.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
