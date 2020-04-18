import React, {PureComponent} from 'react';
import './item-list.css';

import ApiService from '../../services/api-service';
import {getContent} from '../../utils/utils';

export default class ItemList extends PureComponent {

  _apiService = new ApiService();

  state = {
    peopleList: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this._apiService
      .getAllPeople()
      .then((peopleList) => this.setState({peopleList, loading: false}))
      .catch(this._onError);
  }

  _onError = () => {
    this.setState({error: true, loading: false});
  };

  _renderItems(arr) {
    return arr.map(({id, name}) => (
    <li className="list-group-item"
        key={id}
        onClick={() => this.props.onItemSelected(id)} >
      {name}
    </li>
    ));
  }

  render() {
    const {peopleList, loading, error} = this.state;
    const {onItemSelected} = this.props;
    const itemListViewProps = {peopleList, onItemSelected};
    const content = getContent(loading, error, ItemListView, itemListViewProps);

    return (
      <React.Fragment>
        {content}
      </React.Fragment>
    );
  }
}



const ItemListView = ({peopleList, onItemSelected}) => {

  const items = peopleList.map(({id, name}) => (
    <li className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)} >
      {name}
    </li>
  ));

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};