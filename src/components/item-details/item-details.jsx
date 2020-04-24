import React from 'react';
import PropTypes from 'prop-types';
import './item-details.css';
import ErrorButton from '../error-button/error-button';


const ItemDetails = ({data, children}) => {
  const {imageUrl, name} = data;

  return (
    <React.Fragment>
      <img className="item-image"
            src={imageUrl}
            alt="item" />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          {React
            .Children
            .map(children, (child) => React.cloneElement(child, {data}))}
        </ul>
        <ErrorButton />
      </div>
    </React.Fragment>
  );
};

ItemDetails.propTypes = {
  data: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
};

const ItemField = ({data, field, label}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className="term">{label}:</span>
      <span>{data[field]}</span>
    </li>
  );
};

ItemField.propTypes = {
  data: PropTypes.object,
  field: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ItemDetails;
export {ItemField};