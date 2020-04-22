import React, {PureComponent} from 'react';
import './people-page.css';

import Row from '../row/row';
import ErrorBoundary from '../error-boundary/error-boundary';
import {PersonList} from '../wrapped-components/wrapped-item-list';
import {PersonDetails} from '../wrapped-components/wrapped-item-details';



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
          <PersonList onItemSelected={this._handlePersonSelected}>
            {(it) => `${it.name} (Birth Year: ${it.birthYear})`}
          </PersonList>
        </ErrorBoundary>
        <ErrorBoundary>
          <PersonDetails itemId={selectedPerson} />
        </ErrorBoundary>
      </Row>
    );
  }
}

