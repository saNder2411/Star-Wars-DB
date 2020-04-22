import ItemList from '../item-list/item-list';
import withItemListData from '../../hocs/with-item-list-data/with-item-list-data';
import ApiService from '../../services/api-service';

const {getAllPeople, getAllStarships, getAllPlanets} = new ApiService();

const PersonList = withItemListData(ItemList, getAllPeople);
const StarshipList = withItemListData(ItemList, getAllStarships);
const PlanetList = withItemListData(ItemList, getAllPlanets);

export {PersonList, StarshipList, PlanetList};
