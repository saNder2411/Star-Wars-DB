import React from 'react';
import PropTypes from 'prop-types';
import './starships-page.css';

import ErrorBoundary from '../../error-boundary/error-boundary';
import {StarshipList} from '../../api-components/item-lists';
import {withRouter} from 'react-router-dom';


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