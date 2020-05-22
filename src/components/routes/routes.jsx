import React from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';

import PeoplePage from '../pages/people-page/people-page';
import StarshipsPage from '../pages/starships-page/starships-page';
import StarshipDetails from '../api-components/starship-details';
import PlanetPage from '../pages/planet-page/planet-page';
import SecretPage from '../pages/secret-page/secret-page';
import LoginPage from '../pages/login-page/login-page';


const Routes = ({isLoggedIn, onLogin}) => {

  return (
    <Switch>
      <Route exact path="/" render={() => <h2 className="app-title">Welcome to Star Wars DB</h2>} />
      <Route exact path="/people/:id?" component={PeoplePage} />
      <Route exact path="/planets/:id?" component={PlanetPage} />
      <Route exact path="/starships/" component={StarshipsPage} />
      <Route
        path="/starships/:id"
        render={({match: {params}}) => <StarshipDetails itemId={params.id} />} />
      <Route
        path="/secret"
        render={() => <SecretPage isLoggedIn={isLoggedIn} />} />
      <Route
        path="/login"
        render={() => <LoginPage isLoggedIn={isLoggedIn} onLogin={onLogin} />} />
      <Route render={() => <h2>Page not found!</h2>} />
    </Switch>
  );
};

Routes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default Routes;
