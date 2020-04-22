import React, {PureComponent} from 'react';
import './starships-page.css';

import Row from '../row/row';
import ErrorBoundary from '../error-boundary/error-boundary';
import {StarshipList} from '../wrapped-components/wrapped-item-list';
import {StarshipDetails} from '../wrapped-components/wrapped-item-details';


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
          <StarshipList onItemSelected={this._handleStarshipSelected}>
            {(it) => `${it.name} (Model: ${it.model})`}
          </StarshipList>
        </ErrorBoundary>
        <ErrorBoundary>
          <StarshipDetails itemId={selectedStarship} />
        </ErrorBoundary>
      </Row>
    );
  }
}