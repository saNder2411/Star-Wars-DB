import React from 'react';
import ItemList from '../item-list/item-list';
import withItemListData from '../../hocs/with-item-list-data/with-item-list-data';
import ApiService from '../../services/api-service';

const {getAllPeople, getAllStarships, getAllPlanets} = new ApiService();

const withChildFunction = (Component, fun) => {
  return (props) => (
    <Component {...props} >
      {fun}
    </Component>
  );
};

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>;

const PersonList = withItemListData(withChildFunction(ItemList, renderName), getAllPeople);
const StarshipList = withItemListData(withChildFunction(ItemList, renderNameAndModel ), getAllStarships);
const PlanetList = withItemListData(withChildFunction(ItemList, renderName), getAllPlanets);

export {PersonList, StarshipList, PlanetList};
