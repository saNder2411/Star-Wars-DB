import React, {PureComponent} from 'react';
import './random-planet.css';
import Spinner from '../spinner/spinner';

import ApiService from '../../services/api-service';

export default class RandomPlanet extends PureComponent {

  _apiService = new ApiService();

  state = {
    planet: {
      id: 2,
    },
    loading: true,
  };

  componentDidMount() {
    this._updatePlanet(Math.floor(Math.random() * 20)  + 2);
  }


  _onPlanetLoaded = (planet) => {
    this.setState({planet, loading: false});
  };

  _updatePlanet(id) {
    this._apiService
      .getPlanet(id)
      .then(this._onPlanetLoaded);
  }

  render() {
    const {planet, loading} = this.state;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PlanetView {...planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
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
        <ul className="list-group list-group-flush">
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