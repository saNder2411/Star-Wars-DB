import React from 'react';


const withChildFunction = (fun) => (Component) => {

  return (props) => (
    <Component {...props}>
      {fun}
    </Component>
  );
};

export default withChildFunction;
