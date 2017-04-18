import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { isLoading } from './actions';

class LoadingContainer extends Component {
  render() {
    if (this.props.isLoading) {
      return (
        <h1>LOADING</h1>
      );
    } else {
      return null;
    }
  }
}

function mapStateToProps({ isLoading }) {
  return {
    isLoading,
  }
}

export default connect(mapStateToProps)(LoadingContainer);