import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import './secret-page.css';

const SecretPage = ({isLoggedIn}) => {
  
  if (isLoggedIn) {
    return (
      <div className="secret-page jumbotron text-center">
        <h3>The page is full of secrets!!!</h3>
      </div>
    );
  }

  return <Redirect to="/login" />;
};

SecretPage.propTypes = {isLoggedIn: PropTypes.bool.isRequired};

export default SecretPage; 