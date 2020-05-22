import React from 'react';
import PropTypes from 'prop-types';
import './random-planet.css';


const RandomPlanet = ({data, children}) => {

  const {imageUrl, name} = data;

  return (
    <>
      <img
        className="planet-image"
        src={imageUrl}
        alt="random planet" />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group">
          {React
            .Children
            .map(children, (child) => React.cloneElement(child, {data}))}
        </ul>
      </div>
    </>
  );
};

RandomPlanet.propTypes = {
  data: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
};

export default RandomPlanet;
