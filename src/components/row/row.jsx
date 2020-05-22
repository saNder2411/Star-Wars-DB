import React from 'react';
import PropTypes from 'prop-types';
import './row.css';


const Row = ({children}) => {

  const [left, right] = children;

  return (
    <div className="row mb2">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  );
};

Row.propTypes = {children: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired};

export default Row;
