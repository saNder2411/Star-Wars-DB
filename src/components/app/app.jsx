import React, {PureComponent} from 'react';
import './app.css';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';
import ApiService from '../../services/api-service';
import StarshipsPage from '../starships-page/starships-page';

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
    const planet = showRandomPlanet ? <RandomPlanet /> : null;
    const toggleTerm = showRandomPlanet ? `Off` : `On`;
    const {
      getAllPeople,
      getAllStarships,
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage,
    } = this._apiService;

    if (hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className="app">
        <Header />
        {planet}

        <div className="row mb2 button-row">
          <button className="toggle-planet btn btn-warning btn-lg" onClick={this._handleToggleRandomPlanetClick}>
            Random Planet {toggleTerm}
          </button>
          <ErrorButton />
        </div>

        <PeoplePage
          getItemListData={getAllPeople}
          getItemDetailsData={getPerson}
          getItemImageUrl={getPersonImage} />

        <StarshipsPage
          getItemListData={getAllStarships}
          getItemDetailsData={getStarship}
          getItemImageUrl={getStarshipImage} />
      </div>
    );
  }
}