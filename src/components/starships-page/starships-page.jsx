import React, {PureComponent} from 'react';
import './starships-page.css';

import Row from '../row/row';
import ErrorBoundary from '../error-boundary/error-boundary';
import {StarshipList} from '../api-components/item-list';
import StarshipDetails from '../api-components/starship-details';


export default class StarshipsPage extends PureComponent {

  state = {selectedStarship: null};

  _handleStarshipSelected = (id) => {
    this.setState({selectedStarship: id});
  };

  render() {
    const {selectedStarship} = this.state;

    return (
      <Row>
        <ErrorBoundary>
          <StarshipList onItemSelected={this._handleStarshipSelected} />
        </ErrorBoundary>
        <ErrorBoundary>
          <StarshipDetails itemId={selectedStarship} />
        </ErrorBoundary>
      </Row>
    );
  }
}