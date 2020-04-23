import React from 'react';
import PropTypes from 'prop-types';
import './starships-page.css';

import Row from '../../row/row';
import ErrorBoundary from '../../error-boundary/error-boundary';
import {StarshipList} from '../../api-components/item-lists';
import StarshipDetails from '../../api-components/starship-details';
import withSelectedItem from '../../../hocs/with-selected-item/with-selected-item';


const StarshipsPage = ({itemId, onItemSelected}) => {

  return (
    <Row>
      <ErrorBoundary>
        <StarshipList onItemSelected={onItemSelected} />
      </ErrorBoundary>
      <ErrorBoundary>
        <StarshipDetails itemId={itemId} />
      </ErrorBoundary>
    </Row>
  );
};

StarshipsPage.propTypes = {
  itemId: PropTypes.string,
  onItemSelected: PropTypes.func.isRequired,
};

export default withSelectedItem(StarshipsPage);