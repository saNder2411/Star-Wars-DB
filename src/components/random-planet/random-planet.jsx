import React from 'react';
import './random-planet.css';

const RandomPlanet = ({data, children}) => {
  const {imageUrl, name} = data;
  return (
    <React.Fragment>
      <img className="planet-image"
              src={imageUrl}
              alt="random planet"/>
      <div>
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

export default RandomPlanet;