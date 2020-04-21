import React, {PureComponent} from 'react';
import './item-details.css';

import {getContent} from '../../utils/utils';
import ErrorButton from '../error-button/error-button';

export default class ItemDetails extends PureComponent {

  state = {
    item: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this._updateItem();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.itemId !== this.props.itemId) {
      this.setState({loading: true});
      this._updateItem();
    }
  }

  _updateItem() {
    const {itemId, getItemDetailsData, getItemImageUrl} = this.props;

    if (itemId === null) {
      return;
    }

    getItemDetailsData(itemId)
      .then((item) => {
        const imageUrl = getItemImageUrl(item);
        this.setState({
          item: {...item, imageUrl},
          loading: false,
        });
      })
      .catch(this._onError);
  }

  _onError = () => {
    this.setState({error: true, loading: false});
  };

  render() {
    const {item, loading, error} = this.state;
    const {children} = this.props
    const ItemDetailsViewProps = {item, children}

    if (item === null) {
      return (
        <div className="person-details card">
          <span>Selected a person from a list</span>
        </div>
      );
    }

    const content = getContent(loading, error, React.memo(ItemDetailsView), ItemDetailsViewProps);
    return (
      <div className="person-details card">
        {content}
      </div>
    );
  }
}


const ItemDetailsView = ({item, children}) => {
  const {imageUrl, name} = item;

  return (
    <React.Fragment>
      <img className="person-image"
            src={imageUrl}
            alt="item" />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React
            .Children
            .map(children, (child) => React.cloneElement(child, {item}))}
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  );
};

const ItemField = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}:</span>
      <span>{item[field]}</span>
    </li>
  );
};

export {ItemField};