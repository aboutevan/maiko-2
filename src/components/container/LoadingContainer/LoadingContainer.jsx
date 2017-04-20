import React, { Component } from 'react';
import { connect } from 'react-redux';

class LoadingContainer extends Component {

  static propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
  }

  render() {
    if (this.props.isLoading) {
      return (
        <h1>LOADING</h1>
      );
    }
    return null;
  }
}

function mapStateToProps({ isLoading }) {
  return {
    isLoading,
  };
}

export default connect(mapStateToProps)(LoadingContainer);
