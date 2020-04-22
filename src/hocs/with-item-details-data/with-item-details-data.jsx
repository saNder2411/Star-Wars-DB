import React, {PureComponent} from 'react';
import {getContent} from '../../utils/utils';


const withItemDetailsData = (Component, getItemDetailsData, getItemImageUrl) => {
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
      if (prevProps.itemId !== this.props.itemId) {
        this.setState({loading: true});
        this._updateItem();
      }
    }
  
    _updateItem() {
      const {itemId} = this.props;
  
      if (itemId === null) {
        return;
      }
  
      getItemDetailsData(itemId)
        .then(this._onItemLoaded)
        .catch(this._onError);
    }

    _onItemLoaded = (data) => {
      const imageUrl = getItemImageUrl(data);
    
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