import React from 'react';
import ItemDetails, {ItemField} from '../item-details/item-details';
import withItemDetailsData from '../../hocs/with-item-details-data/with-item-details-data';
import withApiService from '../../hocs/with-api-service/with-api-service';

const WrappedItemDetails = withItemDetailsData(ItemDetails);

const PersonDetails = ({itemId, apiService}) => {
  const {getPerson, getPersonImage} = apiService;

  return (
    <WrappedItemDetails itemId={itemId} getItemDetailsData={getPerson} getItemImageUrl={getPersonImage} >
      <ItemField field="gender" label="Gender" />
      <ItemField field="birthYear" label="Birth Year" />
      <ItemField field="eyeColor" label="Eye Color" />
    </WrappedItemDetails>
  );
}; 

const StarshipDetails = ({itemId, apiService}) => {
  const {getStarship, getStarshipImage} = apiService;

  return (
    <WrappedItemDetails itemId={itemId} getItemDetailsData={getStarship} getItemImageUrl={getStarshipImage} >
      <ItemField field="model" label="Model" />
      <ItemField field="length" label="Length" />
      <ItemField field="costInCredits" label="Cost" />
    </WrappedItemDetails>
  );
};

const PlanetDetails = ({itemId, apiService}) => {
  const {getPlanet, getPlanetImage} = apiService;

  return (
    <WrappedItemDetails itemId={itemId} getItemDetailsData={getPlanet} getItemImageUrl={getPlanetImage} >
      <ItemField field="population" label="Population" />
      <ItemField field="rotationPeriod" label="Rotation Period" />
      <ItemField field="diameter" label="Diameter" />
    </WrappedItemDetails>
  );
};

const WrappedPersonDetails = withApiService(PersonDetails);
const WrappedStarshipDetails = withApiService(StarshipDetails);
const WrappedPlanetDetails = withApiService(PlanetDetails);

export {WrappedPersonDetails, WrappedStarshipDetails, WrappedPlanetDetails};
