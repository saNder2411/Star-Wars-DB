import React, {PureComponent} from 'react';
import {getContent} from '../../utils/utils';

const withItemListData = (Component) => {
  class WithItemListData extends PureComponent {
    state = {
      data: null,
      loading: true,
      error: false,
    };
  
    componentDidMount() {
      this._updateItemList();
    }

    componentDidUpdate(prevProps) {
      if (prevProps.getData !== this.props.getData) {
        this._updateItemList();
      }
    }

    _updateItemList() {
      this.setState({error: false, loading: true})
      this.props.getData()
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