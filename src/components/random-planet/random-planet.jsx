import React from 'react';
import PropTypes from 'prop-types';
import './random-planet.css';


const RandomPlanet = ({data, children}) => {
  const {imageUrl, name} = data;

  return (
    <React.Fragment>
      <img className="planet-image"
              src={imageUrl}
              alt="random planet"/>

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group">
          {React
            .Children
            .map(children, (child) => React.cloneElement(child, {data}))}
        </ul>
      </div>
    </React.Fragment>
  );
};

RandomPlanet.propTypes = {
  data: PropTypes.object,
  children: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
};

export default RandomPlanet;