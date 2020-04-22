import React from 'react';
import ItemDetails, {ItemField} from '../item-details/item-details';
import withItemDetailsData from '../../hocs/with-item-details-data/with-item-details-data';
import withApiService from '../../hocs/with-api-service/with-api-service';

const WrappedItemDetails = withItemDetailsData(ItemDetails);

const PersonDetails = (props) => {


  return (
    <WrappedItemDetails {...props}>
      <ItemField field="gender" label="Gender" />
      <ItemField field="birthYear" label="Birth Year" />
      <ItemField field="eyeColor" label="Eye Color" />
    </WrappedItemDetails>
  );
};

const mapMethodsToProps = ({getPerson, getPersonImage}) => ({
  getItemDetailsData: getPerson,
  getItemImageUrl: getPersonImage,
});



export default withApiService(PersonDetails, mapMethodsToProps);