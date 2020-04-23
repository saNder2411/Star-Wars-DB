import React from 'react';
import {ItemField} from '../item-details/item-details';
import RandomPlanet from '../random-planet/random-planet';
import withRandomPlanetData from '../../hocs/with-random-planet-data/with-random-planet-data';
import withApiService from '../../hocs/with-api-service/with-api-service';


const WrappedRandomPlanet = withRandomPlanetData(RandomPlanet);

const RandomPlanetDetails = (props) => {

  return (
    <WrappedRandomPlanet {...props}>
      <ItemField field="population" label="Population" />
      <ItemField field="rotationPeriod" label="Rotation Period" />
      <ItemField field="diameter" label="Diameter" />
    </WrappedRandomPlanet>
  );
};

const mapMethodsToProps = ({getPlanet, getPlanetImage}) => ({getPlanet, getPlanetImage});

export default withApiService(mapMethodsToProps)(RandomPlanetDetails);
