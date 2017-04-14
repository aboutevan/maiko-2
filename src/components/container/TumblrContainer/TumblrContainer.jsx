import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

class TumblrContainer extends Component {

  static propTypes = {
    fetchTumblr: React.PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.fetchTumblr();
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} role="button">Click Me</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...actions }, dispatch);
}

export default connect(null, mapDispatchToProps)(TumblrContainer);
