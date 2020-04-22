import React from 'react';
import {ApiServiceConsumer} from '../../components/api-service-context/api-service-context';

const withApiService = (Component, mapMethodsToProps) => {
  return (props) => (
    <ApiServiceConsumer>
      {
        (apiService) => {
          const serviceProps = mapMethodsToProps(apiService);

          return <Component {...props} {...serviceProps} />;
        }
      }
    </ApiServiceConsumer>
  )
};

export default withApiService;