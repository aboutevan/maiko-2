import React, { Component } from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {

  static propTypes = {
    location: React.PropTypes.objectOf(React.PropTypes.any).isRequired,
    children: React.PropTypes.node.isRequired,
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 700)
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
