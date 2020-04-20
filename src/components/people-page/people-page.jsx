import React, {PureComponent} from 'react';
import './people-page.css';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';

export default class PeoplePage extends PureComponent {

  state = {
    selectedPerson: null,
    hasError: false,
  };

  componentDidCatch() {
    this.setState({hasError: true});
  }

  _handlePersonSelected = (id) => {
    this.setState({selectedPerson: id});
  };

  render() {
    const {hasError} = this.state;

    if (hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this._handlePersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
    );
  }
}