import React, {PureComponent} from 'react';
import './app.css';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

export default class App extends PureComponent {

  state = {
    showRandomPlanet: true,
    selectedPerson: null,
  };

  _handleToggleRandomPlanetClick = () => {
    this.setState((prevState) => ({showRandomPlanet: !prevState.showRandomPlanet}));
  };

  _handlePersonSelected = (id) => {
    this.setState({selectedPerson: id});
  };

  render() {

    const {showRandomPlanet} = this.state;
    const planet = showRandomPlanet ? <RandomPlanet /> : null;
    const toggleTerm = showRandomPlanet ? `Off` : `On`;

    return (
      <div className="app">
        <Header />
        {planet}

        <button className="toggle-planet btn btn-warning btn-lg" onClick={this._handleToggleRandomPlanetClick}>
          Random Planet {toggleTerm}
        </button>
  
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this._handlePersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
  
      </div>
    );
  }
}