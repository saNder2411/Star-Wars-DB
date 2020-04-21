import React, {PureComponent} from 'react';
import './item-list.css';

import {getContent} from '../../utils/utils';

export default class ItemList extends PureComponent {

  state = {
    itemList: null,
    loading: true,
    error: false,
  };

  componentDidMount() {

    const {getItemListData} = this.props;
    getItemListData()
      .then((itemList) => this.setState({itemList, loading: false}))
      .catch(this._onError);
  }

  _onError = () => {
    this.setState({error: true, loading: false});
  };

  render() {
    const {itemList, loading, error} = this.state;
    const {onItemSelected, children} = this.props;

    const itemListViewProps = {itemList, onItemSelected, renderItem: children};
    const content = getContent(loading, error, ItemListView, itemListViewProps);

    return (
      <React.Fragment>
        {content}
      </React.Fragment>
    );
  }
}



const ItemListView = ({itemList, onItemSelected, renderItem}) => {

  const items = itemList.map((item) => {
    const {id} = item;
    const label = renderItem(item)

    return (<li className="list-group-item"
        key={id}
        onClick={() => onItemSelected(id)} >
      {label}
    </li>);
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};