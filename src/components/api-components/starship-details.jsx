import React from 'react';
import ItemDetails, {ItemField} from '../item-details/item-details';
import withItemDetailsData from '../../hocs/with-item-details-data/with-item-details-data';
import withApiService from '../../hocs/with-api-service/with-api-service';


const WrappedItemDetails = withItemDetailsData(ItemDetails);

const StarshipDetails = (props) => {

  return (
    <WrappedItemDetails {...props}>
      <ItemField field="starshipClass" label="Starship Class" />
      <ItemField field="model" label="Model" />
      <ItemField field="length" label="Length" />
      <ItemField field="manufacturer" label="Manufacturer" />
      <ItemField field="costInCredits" label="Cost" />
      <ItemField field="consumables" label="Consumables" />
      <ItemField field="crew" label="Crew" />
      <ItemField field="passengers" label="Passengers" />
      <ItemField field="cargoCapacity" label="Cargo Capacity" />
    </WrappedItemDetails>
  );
};

const mapMethodsToProps = ({getStarship, getStarshipImage}) => ({
  getItemDetailsData: getStarship,
  getItemImageUrl: getStarshipImage,
});

export default withApiService(mapMethodsToProps)(StarshipDetails);

