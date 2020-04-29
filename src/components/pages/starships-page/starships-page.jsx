import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import ErrorBoundary from '../../error-boundary/error-boundary';
import {StarshipList} from '../../api-components/item-lists';

import './starships-page.css';


const StarshipsPage = ({history}) => {

  return (
    <React.Fragment>
      <h2>Starships</h2>
      <ErrorBoundary>
        <StarshipList onItemSelected={(id) => history.push(id)} />
      </ErrorBoundary>
    </React.Fragment>
  );
};

StarshipsPage.propTypes = {
  history: PropTypes.object.isRequired, 
};

export default withRouter(StarshipsPage);