import React from 'react';
import './planet-page.css';

import Row from '../../row/row';
import ErrorBoundary from '../../error-boundary/error-boundary';
import {PlanetList} from '../../api-components/item-lists';
import PlanetDetails from '../../api-components/planet-details';
import withSelectedItem from '../../../hocs/with-selected-item/with-selected-item';

const PlanetPage = ({itemId, onItemSelected}) => {

  return (
    <Row>
      <ErrorBoundary>
        <PlanetList onItemSelected={onItemSelected} />
      </ErrorBoundary>
      <ErrorBoundary>
        <PlanetDetails itemId={itemId} />
      </ErrorBoundary>
    </Row>
  );
};

export default withSelectedItem(PlanetPage);

