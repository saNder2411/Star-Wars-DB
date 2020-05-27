import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import getContent from '../../utils/utils';


const withRandomPlanetData = (Component) => {

  class WithRandomPlanetData extends PureComponent {

    static defaultProps = {
      updateInterval: 20000,
    };

    static propTypes = {
      updateInterval: PropTypes.number,
      getPlanet: PropTypes.func.isRequired,
      getPlanetImage: PropTypes.func.isRequired,
      children: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
    };

    _interval = null;

    state = {
      data: null,
      loading: true,
      error: false,
    };

    componentDidMount() {
      const {updateInterval} = this.props;
      this._updatePlanet();
      this._interval = setInterval(this._updatePlanet, updateInterval);
    }

    componentDidUpdate(prevState) {
      const {getPlanet} = this.props;

      if (prevState.getPlanet !== getPlanet) {
        this._updatePlanet();
      }
    }

    componentWillUnmount() {
      clearInterval(this._interval);
    }

    _updatePlanet = () => {
      const {getPlanet, getPlanetImage} = this.props;
      const id = Math.floor(Math.random() * 19) + 2;

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
