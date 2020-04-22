import React, {PureComponent} from 'react';
import './people-page.css';

import Row from '../../row/row';
import ErrorBoundary from '../../error-boundary/error-boundary';
import {PersonList} from '../../api-components/item-list';
import PersonDetails from '../../api-components/person-details';


export default class PeoplePage extends PureComponent {

  state = {selectedItem: null};

  _handleItemSelected = (id) => {
    this.setState({selectedItem: id});
  };

  render() {
    const {selectedItem} = this.state;

    return (
      <Row>
        <ErrorBoundary>
          <PersonList onItemSelected={this._handleItemSelected} />
        </ErrorBoundary>
        <ErrorBoundary>
          <PersonDetails itemId={selectedItem} />
        </ErrorBoundary>
      </Row>
    );
  }
}

