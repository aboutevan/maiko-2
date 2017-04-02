import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Header } from 'presentation';
import toggleNav from './actions';

class HeaderContainer extends Component {

  static propTypes = {
    navVisible: PropTypes.bool,
    toggleNav: PropTypes.func,
  };

  static defaultProps = {
    navVisible: false,
    toggleNav: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      navVisible: props.navVisible,
      className: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.toggleNav(!this.state.navVisible);
    this.setState({
      navVisible: !this.state.navVisible,
      className: this.state.navVisible ? '' : 'sidebar-visible',
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
    navVisible: state.navOverlayReducer,
  }
);

const mapDispatchToProps = dispatch => (
  bindActionCreators({ toggleNav }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
