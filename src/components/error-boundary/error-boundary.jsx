import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './error-boundary.css';
import ErrorIndicator from '../error-indicator/error-indicator';


export default class ErrorBoundary extends PureComponent {

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

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