import React, {PureComponent} from 'react';
import './error-boundary.css';
import ErrorIndicator from '../error-indicator/error-indicator';


export default class ErrorBoundary extends PureComponent {

  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({hasError: true});
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return this.props.children;
  }
}