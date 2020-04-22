import React, {PureComponent} from 'react';
import './app.css';

import ApiService from '../../services/api-service';
import {ApiServiceProvider} from '../api-service-context/api-service-context';
import Header from '../header/header';
import {RandomPlanetDetails} from '../wrapped-components/wrapped-random-planet';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';
import StarshipsPage from '../starships-page/starships-page';
import ErrorBoundary from '../error-boundary/error-boundary';

export default class App extends PureComponent {
  _apiService = new ApiService();

  state = {
    showRandomPlanet: true,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({hasError: true});
  }

  _handleToggleRandomPlanetClick = () => {
    this.setState((prevState) => ({showRandomPlanet: !prevState.showRandomPlanet}));
  };

  render() {
    const {showRandomPlanet, hasError} = this.state;
    const planet = showRandomPlanet ? <RandomPlanetDetails /> : null;
    const toggleTerm = showRandomPlanet ? `Off` : `On`;

    if (hasError) {
      return <ErrorIndicator />
    }

    return (
      <ErrorBoundary>
        <ApiServiceProvider value={this._apiService} >
          <div className="app">
            <Header />
            {planet}

            <div className="row mb2 button-row">
              <button className="toggle-planet btn btn-warning btn-lg" onClick={this._handleToggleRandomPlanetClick}>
                Random Planet {toggleTerm}
              </button>
              <ErrorButton />
            </div>

            <PeoplePage />

            <StarshipsPage />
          </div>
        </ApiServiceProvider>
      </ErrorBoundary>
    );
  }
}