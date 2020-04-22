import React, {PureComponent} from 'react';
import {getContent} from '../../utils/utils';


const withItemDetailsData = (Component) => {
  class WithItemDetailsData extends PureComponent {
    state = {
      data: null,
      loading: true,
      error: false,
    };
  
    componentDidMount() {
      this._updateItem();
    }
  
    componentDidUpdate(prevProps) {
      if (prevProps.itemId !== this.props.itemId ||
        prevProps.getItemDetailsData !== this.props.getItemDetailsData) {
        this._updateItem();
      }
    }
  
    _updateItem() {
      const {itemId, getItemDetailsData, getItemImageUrl} = this.props;
  
      if (itemId === null) {
        return;
      }

      this.setState({error: false, loading: true});
      getItemDetailsData(itemId)
        .then((data) => this.setState({
            data: {...data, imageUrl: getItemImageUrl(data)},
            loading: false,
          }))
        .catch(() => this.setState({error: true, loading: false}));
    }
  
    render() {
      const {data, loading, error} = this.state;
  
      if (data === null) {
        return (
          <div className="person-details card">
            <span>Selected a person from a list</span>
          </div>
        );
      }

      const {children} = this.props;
      const content = getContent(loading, error, React.memo(Component), {data, children});

      return (
        <div className="person-details card">
          {content}
        </div>
      );
    }
  }

  return WithItemDetailsData;
};

export default withItemDetailsData;