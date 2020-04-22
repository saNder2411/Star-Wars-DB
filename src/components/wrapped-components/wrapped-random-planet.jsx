import React from 'react';
import {ItemField} from '../item-details/item-details';
import RandomPlanet from '../random-planet/random-planet';
import withRandomPlanetData from '../../hocs/with-random-planet-data/with-random-planet-data';

const WrappedRandomPlanet = withRandomPlanetData(RandomPlanet);

const RandomPlanetDetails = () => {
  return (
    <WrappedRandomPlanet >
      <ItemField field="population" label="Population" />
      <ItemField field="rotationPeriod" label="Rotation Period" />
      <ItemField field="diameter" label="Diameter" />
    </WrappedRandomPlanet>
  );
};

export {RandomPlanetDetails};
