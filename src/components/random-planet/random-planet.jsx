import React, {PureComponent} from 'react';
import './random-planet.css';

import ApiService from '../../services/api-service';
import {getContent} from '../../utils/utils';

export default class RandomPlanet extends PureComponent {

  _apiService = new ApiService();
  _interval = null;

  state = {
    planet: {
      id: 2,
    },
    loading: true,
    error: false,
  };

  componentDidMount() {
    this._updatePlanet();
    this._interval = setInterval(this._updatePlanet, 30000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  _onError = () => {
    this.setState({error: true, loading: false});
  };

  _onPlanetLoaded = (planet) => {
    this.setState({planet, loading: false});
  };

  _updatePlanet = () => {
    const id = Math.floor(Math.random() * 19)  + 2;
    this._apiService
      .getPlanet(id)
      .then(this._onPlanetLoaded)
      .catch(this._onError);
  }

  render() {
    const {planet, loading, error} = this.state;
    const content = getContent(loading, error, PlanetView, planet);

    return (
      <div className="random-planet jumbotron rounded">
        {content}
      </div>
    );
  }
}

const PlanetView = ({id, name, population, rotationPeriod, diameter}) => {
  return (
    <React.Fragment>
      <img className="planet-image"
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
              alt="random planet"/>
      <div>
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};