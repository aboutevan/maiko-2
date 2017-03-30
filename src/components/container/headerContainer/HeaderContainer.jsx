import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header } from 'presentation';
import toggleSidebar from './actions';

class HeaderContainer extends Component {

  static propTypes = {
    sidebarVisible: PropTypes.bool,
    toggleSidebar: PropTypes.func,
  };

  static defaultProps = {
    sidebarVisible: false,
    toggleSidebar: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: props.sidebarVisible,
      className: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleSidebar(!this.state.sidebarVisible);
    this.setState({
      sidebarVisible: !this.state.sidebarVisible,
      className: this.state.sidebarVisible ? '' : 'sidebar-visible',
    });
  }

  render() {
    return (
      <Header handleClick={this.handleClick} className={this.state.className} />
    );
  }
}

const mapStateToProps = state => (
  {
    sidebarVisible: state.sidebar,
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({ toggleSidebar }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
