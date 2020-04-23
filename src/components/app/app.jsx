import React, {PureComponent} from 'react';
import './app.css';

import ApiService from '../../services/api-service';
import DummyApiService from '../../services/dummy-api-service';
import {ApiServiceProvider} from '../api-service-context/api-service-context';
import Header from '../header/header';
import RandomPlanetDetails from '../api-components/random-planet-details';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../pages/people-page/people-page';
import StarshipsPage from '../pages/starships-page/starships-page';
import PlanetPage from '../pages/planet-page/planet-page';
import ErrorBoundary from '../error-boundary/error-boundary';

export default class App extends PureComponent {

  _DummyApiService = DummyApiService;

  _ApiService = ApiService;

  state = {
    apiService: new this._ApiService(),
    hasError: false,
  };

  componentDidCatch() {
    this.setState({hasError: true});
  }

  _handleServiceChangeClick = () => {
    this.setState((prevState) => {
      const Service = prevState.apiService instanceof this._ApiService ? this._DummyApiService : this._ApiService;

      return {apiService: new Service()};
    });
  };

  render() {
    const {apiService, hasError} = this.state;

    if (hasError) {
      return <ErrorIndicator />
    }

    return (
      <ErrorBoundary>
        <ApiServiceProvider value={apiService} >
          <div className="app">
            <Header onServiceChange={this._handleServiceChangeClick} />
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
  }
}