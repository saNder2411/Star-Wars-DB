import React from 'react';
import PropTypes from 'prop-types';
import './people-page.css';

import Row from '../../row/row';
import ErrorBoundary from '../../error-boundary/error-boundary';
import {PersonList} from '../../api-components/item-lists';
import PersonDetails from '../../api-components/person-details';
import withSelectedItem from '../../../hocs/with-selected-item/with-selected-item';


const PeoplePage = ({itemId, onItemSelected}) => {

  return (
    <Row>
      <ErrorBoundary>
        <PersonList onItemSelected={onItemSelected} />
      </ErrorBoundary>
      <ErrorBoundary>
        <PersonDetails itemId={itemId} />
      </ErrorBoundary>
    </Row>
  );
};

PeoplePage.propTypes = {
  itemId: PropTypes.string,
  onItemSelected: PropTypes.func.isRequired,
};

export default withSelectedItem(PeoplePage);
