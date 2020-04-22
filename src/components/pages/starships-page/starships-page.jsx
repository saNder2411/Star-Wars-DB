import React, {PureComponent} from 'react';
import './starships-page.css';

import Row from '../../row/row';
import ErrorBoundary from '../../error-boundary/error-boundary';
import {StarshipList} from '../../api-components/item-list';
import StarshipDetails from '../../api-components/starship-details';


export default class StarshipsPage extends PureComponent {

  state = {selectedItem: null};

  _handleItemSelected = (id) => {
    this.setState({selectedItem: id});
  };

  render() {
    const {selectedItem} = this.state;

    return (
      <Row>
        <ErrorBoundary>
          <StarshipList onItemSelected={this._handleItemSelected} />
        </ErrorBoundary>
        <ErrorBoundary>
          <StarshipDetails itemId={selectedItem} />
        </ErrorBoundary>
      </Row>
    );
  }
}