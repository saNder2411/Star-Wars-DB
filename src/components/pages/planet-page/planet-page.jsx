import React from 'react';
import PropTypes from 'prop-types';
import './planet-page.css';

import Row from '../../row/row';
import ErrorBoundary from '../../error-boundary/error-boundary';
import {PlanetList} from '../../api-components/item-lists';
import PlanetDetails from '../../api-components/planet-details';
import {withRouter} from 'react-router-dom';


const PlanetPage = ({history, match}) => {
  const {id} = match.params;

  return (
    <React.Fragment>
      <h2>Planets</h2>
      <Row>
        <ErrorBoundary>
          <PlanetList onItemSelected={(id) => history.push(id)} />
        </ErrorBoundary>
        <ErrorBoundary>
          <PlanetDetails itemId={id} />
        </ErrorBoundary>
      </Row>
    </React.Fragment>
  );
};

PlanetPage.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(PlanetPage);

