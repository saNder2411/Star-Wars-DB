import React, {PureComponent} from 'react';
import './people-page.css';

import Row from '../row/row';
import ItemList from '../item-list/item-list';
import ItemDetails, {ItemField} from '../item-details/item-details';
import ErrorBoundary from '../error-boundary/error-boundary';

export default class PeoplePage extends PureComponent {

  state = {selectedPerson: null};

  _handlePersonSelected = (id) => {
    this.setState({selectedPerson: id});
  };

  render() {
    const {selectedPerson} = this.state;
    const {getItemListData, getItemDetailsData, getItemImageUrl} = this.props;

    return (
      <Row>
        <ErrorBoundary>
          <ItemList
            getItemListData={getItemListData}
            onItemSelected={this._handlePersonSelected}>

            {(it) => `${it.name} (Birth Year: ${it.birthYear})`}

          </ItemList>
        </ErrorBoundary>
        <ErrorBoundary>
          <ItemDetails
            getItemImageUrl={getItemImageUrl}
            getItemDetailsData={getItemDetailsData}
            itemId={selectedPerson}>

            <ItemField field="gender" label="Gender" />
            <ItemField field="birthYear" label="Birth Year" />
            <ItemField field="eyeColor" label="Eye Color" />

          </ItemDetails>
        </ErrorBoundary>
      </Row>
    );
  }
}