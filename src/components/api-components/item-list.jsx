import React from 'react';
import ItemList from '../item-list/item-list';
import withItemListData from '../../hocs/with-item-list-data/with-item-list-data';
import withApiService from '../../hocs/with-api-service/with-api-service';

const withChildFunction = (Component, fun) => {
  return (props) => (
    <Component {...props} >
      {fun}
    </Component>
  );
};

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>;

const mapPersonListMethodsToProps = ({getAllPeople}) => ({getData: getAllPeople});
const mapStarshipListMethodsToProps = ({getAllStarships}) => ({getData: getAllStarships});
const mapPlanetListMethodsToProps = ({getAllPlanets}) => ({getData: getAllPlanets});

const PersonList = withApiService(
  withItemListData(withChildFunction(ItemList, renderName)),
  mapPersonListMethodsToProps);

const StarshipList = withApiService(
  withItemListData(withChildFunction(ItemList, renderNameAndModel)),
  mapStarshipListMethodsToProps);

const PlanetList = withApiService(
  withItemListData(withChildFunction(ItemList, renderName)),
  mapPlanetListMethodsToProps);

export {PersonList, StarshipList, PlanetList};
