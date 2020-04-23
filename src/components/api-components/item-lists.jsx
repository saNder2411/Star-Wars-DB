import React from 'react';
import ItemList from '../item-list/item-list';
import withItemListData from '../../hocs/with-item-list-data/with-item-list-data';
import withApiService from '../../hocs/with-api-service/with-api-service';
import withChildFunction from '../../hocs/with-child-function/with-child-function';
import compose from '../../hocs/compose/compose';

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>;

const mapPersonListMethodsToProps = ({getAllPeople}) => ({getData: getAllPeople});
const mapStarshipListMethodsToProps = ({getAllStarships}) => ({getData: getAllStarships});
const mapPlanetListMethodsToProps = ({getAllPlanets}) => ({getData: getAllPlanets});

const PersonList = compose(
  withApiService(mapPersonListMethodsToProps),
  withItemListData,
  withChildFunction(renderName))(ItemList);

const StarshipList = compose(
  withApiService(mapStarshipListMethodsToProps),
  withItemListData,
  withChildFunction(renderNameAndModel))(ItemList);

const PlanetList = compose(
  withApiService(mapPlanetListMethodsToProps),
  withItemListData,
  withChildFunction(renderName))(ItemList);

export {PersonList, StarshipList, PlanetList};
