import React from 'react';
import PropTypes from 'prop-types';
import './item-list.css';


const ItemList = ({data, onItemSelected, children: renderLabel}) => {

  const items = data.map((item) => {
    const {id} = item;
    const label = renderLabel(item)

    return (
      <li className="list-group-item d-flex justify-content-between align-items-center"
          key={id}
          onClick={() => onItemSelected(id)} >
        {label}
      </li>
    );
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
};

ItemList.defaultProps = {
  onItemSelected: () => {},
};

ItemList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemSelected: PropTypes.func,
  children: PropTypes.func.isRequired,
};

export default ItemList;