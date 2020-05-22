import React, {useState} from 'react';
import './error-button.css';


const ErrorButton = () => {

  const [hasError, setHasError] = useState(false);

  if (hasError) {
    // eslint-disable-next-line react/no-this-in-sfc
    this.foo.bar = 0;
  }

  return (
    <button
      onClick={() => setHasError(true)}
      className="error-button btn btn-danger btn-lg"
      type="button">
      Throw Error
    </button>
  );
};

export default ErrorButton;
