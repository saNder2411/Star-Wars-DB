import React, {PureComponent} from 'react';
import {getContent} from '../../utils/utils';

const withItemListData = (Component, getData) => {
  class WithItemListData extends PureComponent {
    state = {
      data: null,
      loading: true,
      error: false,
    };
  
    componentDidMount() {
      getData()
        .then((data) => this.setState({data, loading: false}))
        .catch(() => this.setState({error: true, loading: false}));
    }

    render() {
      const {data, loading, error} = this.state;
      const content = getContent(loading, error, React.memo(Component), {...this.props, data});
  
      return content
    }
  }

  return WithItemListData;
}

export default withItemListData;