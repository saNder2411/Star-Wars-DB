import React from 'react';
import './item-details.css';
import ErrorButton from '../error-button/error-button';


const ItemDetails = ({data, children}) => {
  const {imageUrl, name} = data;

  return (
    <React.Fragment>
      <img className="person-image"
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

const ItemField = ({data, field, label}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className="term">{label}:</span>
      <span>{data[field]}</span>
    </li>
  );
};

export default ItemDetails;
export {ItemField};