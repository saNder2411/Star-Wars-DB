import React from 'react';
import PropTypes from 'prop-types';
import './app.css';

import {ApiServiceProvider} from '../api-service-context/api-service-context';
import Header from '../header/header';
import RandomPlanetDetails from '../api-components/random-planet-details';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../pages/people-page/people-page';
import StarshipsPage from '../pages/starships-page/starships-page';
import PlanetPage from '../pages/planet-page/planet-page';
import ErrorBoundary from '../error-boundary/error-boundary';
import withAppState from '../../hocs/with-app-state/with-app-state';

const App = ({apiService, hasError, onServiceChange}) => {

  if (hasError) {
    return <ErrorIndicator />
  }

  return (
    <ErrorBoundary>
      <ApiServiceProvider value={apiService} >
        <div className="app">
          <Header onServiceChange={onServiceChange} />
          <RandomPlanetDetails />

          <div className="row mb2 button-row">
            <ErrorButton />
          </div>

          <PeoplePage />
          <PlanetPage />
          <StarshipsPage />
        </div>
      </ApiServiceProvider>
    </ErrorBoundary>
  );
};

App.propTypes = {
  apiService: PropTypes.object.isRequired,
  hasError: PropTypes.bool.isRequired,
  onServiceChange: PropTypes.func.isRequired,
}

export default withAppState(App);