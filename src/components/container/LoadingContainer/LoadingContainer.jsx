import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loading } from 'presentation';

class LoadingContainer extends Component {

  static propTypes = {
    isLoading: React.PropTypes.bool.isRequired,
  }

  render() {
    if (this.props.isLoading) {
      return (
        <Loading />
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
