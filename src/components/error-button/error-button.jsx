import React, {useState} from 'react';
import './error-button.css';


const ErrorButton = () => {

const [hasError, setHasError] = useState(false);

  if (hasError) {
    this.foo.bar = 0;
  }

  return (
    <button
      className="error-button btn btn-danger btn-lg"
      onClick={() => setHasError(true)}>
      Throw Error
    </button>
  );
};

export default ErrorButton