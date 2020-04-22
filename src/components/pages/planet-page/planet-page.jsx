import React, {PureComponent} from 'react';
import './planet-page.css';

import Row from '../../row/row';
import ErrorBoundary from '../../error-boundary/error-boundary';
import {PlanetList} from '../../api-components/item-list';
import PlanetDetails from '../../api-components/planet-details';


export default class PlanetPage extends PureComponent {

  state = {selectedItem: null};

  _handleItemSelected = (id) => {
    this.setState({selectedItem: id});
  };

  render() {
    const {selectedItem} = this.state;

    return (
      <Row>
        <ErrorBoundary>
          <PlanetList onItemSelected={this._handleItemSelected} />
        </ErrorBoundary>
        <ErrorBoundary>
          <PlanetDetails itemId={selectedItem} />
        </ErrorBoundary>
      </Row>
    );
  }
}

