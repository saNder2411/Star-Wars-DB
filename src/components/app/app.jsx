import React from 'react';
import PropTypes from 'prop-types';
import './app.css';
import './bootstrap.min.css';

import {ApiServiceProvider} from '../api-service-context/api-service-context';
import Header from '../header/header';
import RandomPlanetDetails from '../api-components/random-planet-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../pages/people-page/people-page';
import StarshipsPage from '../pages/starships-page/starships-page';
import StarshipDetails from '../api-components/starship-details';
import PlanetPage from '../pages/planet-page/planet-page';
import ErrorBoundary from '../error-boundary/error-boundary';
import withAppState from '../../hocs/with-app-state/with-app-state';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SecretPage from '../pages/secret-page/secret-page';
import LoginPage from '../pages/login-page/login-page';

const App = ({apiService, hasError, isLoggedIn, onServiceChange, onLogin}) => {

  if (hasError) {
    return <ErrorIndicator />
  }

  return (
    <ErrorBoundary>
      <ApiServiceProvider value={apiService}>
        <BrowserRouter>
          <div className="app">
            <Header onServiceChange={onServiceChange} />
            <RandomPlanetDetails />

            <Switch>
              <Route path="/" exact>
                <h2 className="app-title">Welcome to Star Wars DB</h2>
              </Route>

              <Route path="/people/:id?"
                    exact
                    component={PeoplePage} />

              <Route path="/planets/:id?"
                    exact
                    component={PlanetPage} />

              <Route path="/starships/"
                    exact
                    component={StarshipsPage} />

              <Route path="/starships/:id"
                    render={({match: {params}}) => <StarshipDetails itemId={params.id} />} />
              
              <Route path="/secret"
                    render={() => <SecretPage isLoggedIn={isLoggedIn} />} />

              <Route path="/login"
                    render={() => <LoginPage isLoggedIn={isLoggedIn} onLogin={onLogin} />} />

              <Route render={() => <h2>Page not found!</h2>} />
            </Switch>
          </div>
        </BrowserRouter>
      </ApiServiceProvider>
    </ErrorBoundary>
  );
};

App.propTypes = {
  apiService: PropTypes.object.isRequired,
  hasError: PropTypes.bool.isRequired,
  onServiceChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
}

export default withAppState(App);