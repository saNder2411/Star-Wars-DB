import React, {PureComponent} from 'react';
import {getContent} from '../../utils/utils';

const withRandomPlanetData = (Component, getPlanetData, getImageUrl) => {
  class WithRandomPlanetData extends PureComponent {
    _interval = null;
  
    state = {
      data: {
        id: 2,
      },
      loading: true,
      error: false,
    };
  
    componentDidMount() {
      this._updatePlanet();
      this._interval = setInterval(this._updatePlanet, 10000);
    }
  
    componentWillUnmount() {
      clearInterval(this._interval);
    }

    _updatePlanet = () => {
      const id = Math.floor(Math.random() * 19)  + 2;

      getPlanetData(id)
        .then(this._onPlanetLoaded)
        .catch(this._onError);
    };

    _onPlanetLoaded = (data) => {
      const imageUrl = getImageUrl(data);

      this.setState({
        data: {...data, imageUrl},
        loading: false,
      });
    };

    _onError = () => {
      this.setState({error: true, loading: false});
    };

    render() {
      const {data, loading, error} = this.state;
      const {children} = this.props;
      const content = getContent(loading, error, Component, {data, children});
  
      return (
        <div className="random-planet jumbotron rounded">
          {content}
        </div>
      );
    }
  }

  return WithRandomPlanetData;
};

export default withRandomPlanetData;