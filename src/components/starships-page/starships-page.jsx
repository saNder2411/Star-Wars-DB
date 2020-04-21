import React, {PureComponent} from 'react';
import './starships-page.css';

import Row from '../row/row';
import ItemList from '../item-list/item-list';
import ItemDetails, {ItemField} from '../item-details/item-details';
import ErrorBoundary from '../error-boundary/error-boundary';

export default class StarshipsPage extends PureComponent {

  state = {selectedStarship: null};

  _handleStarshipSelected = (id) => {
    this.setState({selectedStarship: id});
  };

  render() {
    const {selectedStarship} = this.state;
    const {getItemListData, getItemDetailsData, getItemImageUrl} = this.props;

    return (
      <Row>
        <ErrorBoundary>
          <ItemList
            getItemListData={getItemListData}
            onItemSelected={this._handleStarshipSelected}>

            {(it) => `${it.name} (Model: ${it.model})`}

          </ItemList>
        </ErrorBoundary>
        <ErrorBoundary>
          <ItemDetails
            getItemImageUrl={getItemImageUrl}
            getItemDetailsData={getItemDetailsData}
            itemId={selectedStarship}>

            <ItemField field="model" label="Model" />
            <ItemField field="length" label="Length" />
            <ItemField field="costInCredits" label="Cost" />

          </ItemDetails>
        </ErrorBoundary>
      </Row>
    );
  }
}