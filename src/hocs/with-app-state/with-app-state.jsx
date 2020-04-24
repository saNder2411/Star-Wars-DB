import React, {PureComponent} from 'react';

import ApiService from '../../services/api-service';
import DummyApiService from '../../services/dummy-api-service';

const withAppState = (Component) => {
  class WithAppState extends PureComponent {

    _DummyApiService = DummyApiService;
  
    _ApiService = ApiService;

    state = {
      apiService: new this._ApiService(),
      hasError: false,
    };
  
    componentDidCatch() {
      this.setState({hasError: true});
    }

    _handleServiceChangeClick = () => {
      this.setState((prevState) => {
        const Service = prevState.apiService instanceof this._ApiService ? this._DummyApiService : this._ApiService;
  
        return {apiService: new Service()};
      });
    };

    render() {
  
      return <Component {...this.state} {...this.props} onServiceChange={this._handleServiceChangeClick} />;
    }
  }

  return WithAppState;
};

export default withAppState;