import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import './starships-page.css';

import ErrorBoundary from '../../error-boundary/error-boundary';
import {StarshipList} from '../../api-components/item-lists';


const StarshipsPage = ({history}) => {

  return (
    <>
      <h2>Starships</h2>
      <ErrorBoundary>
        <StarshipList onItemSelected={(id) => history.push(id)} />
      </ErrorBoundary>
    </>
  );
};

StarshipsPage.propTypes = {
  history: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]).isRequired,
};

export default withRouter(StarshipsPage);
