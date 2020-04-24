import React, {useState} from 'react';


const withSelectedItem = (Component) => {

  return (props) => {
    const [selectedItemId, setSelectedItemId] = useState(null);

    return <Component {...props} itemId={selectedItemId} onItemSelected={setSelectedItemId} />
  };
};

export default withSelectedItem;