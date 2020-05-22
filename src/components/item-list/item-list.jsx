import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import './item-list.css';


const ItemList = ({data, onItemSelected, children: renderLabel, match: {params}}) => {
  const items = data.map((item) => {
    const {id} = item;
    const label = renderLabel(item);
    const isActive = id === params.id ? `active` : ``;

    return (
      <li
        className={`list-group-item d-flex justify-content-between align-items-center ${isActive}`}
        key={id}
        onClick={() => onItemSelected(id)}
        onKeyDown={() => onItemSelected(id)}
        role="button"
        tabIndex={0}>
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
  match: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool, PropTypes.object]).isRequired,
};

export default withRouter(ItemList);
