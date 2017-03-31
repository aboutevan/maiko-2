import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from 'actions';
import { ThreeLineMenu } from 'presentation';

// import './Header.scss';

@connect(state => ({ sidebarVisible: state.sidebar }))
export default class Header extends Component {


  static propTypes = {
    sidebarVisible: PropTypes.objectOf(PropTypes.any),
    dispatch: PropTypes.func,
  };

  static defaultProps = {
    sidebarVisible: {},
    dispatch: () => {},
  }

  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: props.sidebarVisible,
      className: '',
    };
  }

  handleClick() {
    this.setState({
      sidebarVisible: !this.state.sidebarVisible,
      className: this.state.sidebarVisible ? '' : 'sidebar-visible',
    });
    this.props.dispatch(toggleSidebar(!this.state.sidebarVisible));
    console.log(this.props);

  }

  render() {
    return (
      <header className={this.state.className}>
        <a tabIndex="0" onClick={() => this.handleClick()}>
          <ThreeLineMenu className={this.state.className} />
        </a>
      </header>
    );
  }
}
