import React, {PureComponent} from 'react';
import './people-page.css';

import Row from '../row/row';
import ErrorBoundary from '../error-boundary/error-boundary';
import {PersonList} from '../wrapped-components/wrapped-item-list';
import {WrappedPersonDetails} from '../wrapped-components/wrapped-item-details';



export default class PeoplePage extends PureComponent {

  state = {selectedPerson: null};

  _handlePersonSelected = (id) => {
    this.setState({selectedPerson: id});
  };

  render() {
    const {selectedPerson} = this.state;

    return (
      <Row>
        <ErrorBoundary>
          <PersonList onItemSelected={this._handlePersonSelected} />
        </ErrorBoundary>
        <ErrorBoundary>
          <WrappedPersonDetails itemId={selectedPerson} />
        </ErrorBoundary>
      </Row>
    );
  }
}

