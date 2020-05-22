import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import './planet-page.css';

import Row from '../../row/row';
import ErrorBoundary from '../../error-boundary/error-boundary';
import {PlanetList} from '../../api-components/item-lists';
import PlanetDetails from '../../api-components/planet-details';


const PlanetPage = ({history, match}) => {

  const {id} = match.params;

  return (
    <>
      <h2>Planets</h2>
      <Row>
        <ErrorBoundary>
          <PlanetList onItemSelected={(id) => history.push(id)} />
        </ErrorBoundary>
        <ErrorBoundary>
          <PlanetDetails itemId={id} />
        </ErrorBoundary>
      </Row>
    </>
  );
};

PlanetPage.propTypes = {
  history: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.object]).isRequired,
  match: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool, PropTypes.object]).isRequired,
};

export default withRouter(PlanetPage);
