import React, {PureComponent} from 'react';

const withSelectedItem = (Component) => {
  class WithSelectedItem extends PureComponent {

    state = {selectedItem: null};
  
    _handleItemSelected = (id) => {
      this.setState({selectedItem: id});
    };
  
    render() {
      const {selectedItem} = this.state;
  
      return <Component {...this.props} itemId={selectedItem} onItemSelected={this._handleItemSelected} />
    }
  }

  return WithSelectedItem;
}



export default withSelectedItem;