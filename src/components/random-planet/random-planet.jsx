import React, {PureComponent} from 'react';
import './random-planet.css';

import ApiService from '../../services/api-service';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class RandomPlanet extends PureComponent {

  _apiService = new ApiService();

  state = {
    planet: {
      id: 2,
    },
    loading: true,
    error: false,
  };

  componentDidMount() {
    const id = Math.floor(Math.random() * 20)  + 2;
    this._updatePlanet(id);
  }

  _onError = () => {
    this.setState({error: true, loading: false});
  };

  _onPlanetLoaded = (planet) => {
    this.setState({planet, loading: false});
  };

  _updatePlanet(id) {
    this._apiService
      .getPlanet(id)
      .then(this._onPlanetLoaded)
      .catch(this._onError);
  }

  render() {
    const {planet, loading, error} = this.state;
    const hasData = !(loading || error);

    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    const content = hasData ? <PlanetView {...planet}/> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {errorMessage}
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