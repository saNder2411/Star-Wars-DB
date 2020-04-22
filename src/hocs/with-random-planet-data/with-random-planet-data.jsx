import React, {PureComponent} from 'react';
import {getContent} from '../../utils/utils';

const withRandomPlanetData = (Component) => {
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
      this._interval = setInterval(this._updatePlanet, 20000);
    }
  
    componentWillUnmount() {
      clearInterval(this._interval);
    }

    _updatePlanet = () => {
      const {getPlanet, getPlanetImage} = this.props;
      const id = Math.floor(Math.random() * 19)  + 2;

      getPlanet(id)
        .then((data) => this.setState({
            data: {...data, imageUrl: getPlanetImage(data)},
            loading: false,
          }))
        .catch(() => this.setState({error: true, loading: false}));
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