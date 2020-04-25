import React from 'react';
import ItemDetails, {ItemField} from '../item-details/item-details';
import withItemDetailsData from '../../hocs/with-item-details-data/with-item-details-data';
import withApiService from '../../hocs/with-api-service/with-api-service';


const WrappedItemDetails = withItemDetailsData(ItemDetails);

const PlanetDetails = (props) => {

  return (
    <WrappedItemDetails {...props}>
      <ItemField field="population" label="Population" />
      <ItemField field="climate" label="Climate" />
      <ItemField field="terrain" label="Terrain" />
      <ItemField field="gravity" label="Gravity" />
      <ItemField field="rotationPeriod" label="Rotation Period" />
      <ItemField field="orbitalPeriod" label="Orbital Period" />
      <ItemField field="diameter" label="Diameter" />
    </WrappedItemDetails>
  );
};

const mapMethodsToProps = ({getPlanet, getPlanetImage}) => ({
  getItemDetailsData: getPlanet,
  getItemImageUrl: getPlanetImage,
});

export default withApiService(mapMethodsToProps)(PlanetDetails);
