import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import getContent from '../../utils/utils';


const withItemListData = (Component) => {

  class WithItemListData extends PureComponent {

    static propTypes = {getData: PropTypes.func.isRequired};

    state = {
      data: null,
      loading: true,
      error: false,
    };

    componentDidMount() {
      this._updateItemList();
    }

    componentDidUpdate(prevProps) {
      const {getData} = this.props;

      if (prevProps.getData !== getData) {
        this._updateItemList();
      }
    }

    _updateItemList() {
      const {getData} = this.props;

      this.setState({error: false, loading: true});
      getData()
        .then((data) => this.setState({data, loading: false}))
        .catch(() => this.setState({error: true, loading: false}));
    }

    render() {
      const {data, loading, error} = this.state;
      const content = getContent(loading, error, React.memo(Component), {...this.props, data});

      return content;
    }

  }

  return WithItemListData;
};

export default withItemListData;
