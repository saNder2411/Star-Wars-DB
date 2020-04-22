import React from 'react';
import ItemDetails, {ItemField} from '../item-details/item-details';
import withItemDetailsData from '../../hocs/with-item-details-data/with-item-details-data';
import ApiService from '../../services/api-service';

const {
  getPerson,
  getStarship,
  getPlanet,
  getPersonImage,
  getStarshipImage,
  getPlanetImage,
} = new ApiService();

const WrappedPersonDetails = withItemDetailsData(ItemDetails, getPerson, getPersonImage);
const WrappedStarshipDetails = withItemDetailsData(ItemDetails, getStarship, getStarshipImage);
const WrappedPlanetDetails = withItemDetailsData(ItemDetails, getPlanet, getPlanetImage);

const PersonDetails = ({itemId}) => {
  return (
    <WrappedPersonDetails itemId={itemId} >
      <ItemField field="gender" label="Gender" />
      <ItemField field="birthYear" label="Birth Year" />
      <ItemField field="eyeColor" label="Eye Color" />
    </WrappedPersonDetails>
  );
}; 
const StarshipDetails = ({itemId}) => {
  return (
    <WrappedStarshipDetails itemId={itemId} >
      <ItemField field="model" label="Model" />
      <ItemField field="length" label="Length" />
      <ItemField field="costInCredits" label="Cost" />
    </WrappedStarshipDetails>
  );
};
const PlanetDetails = ({itemId}) => {
  return (
    <WrappedPlanetDetails itemId={itemId} >
      <ItemField field="population" label="Population" />
      <ItemField field="rotationPeriod" label="Rotation Period" />
      <ItemField field="diameter" label="Diameter" />
    </WrappedPlanetDetails>
  );
};

export {PersonDetails, StarshipDetails, PlanetDetails};
