import React, { Component } from 'react';
import { ThreeLineMenu, NavOverlay } from 'presentation';

export default class HeaderContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navVisible: false,
      className: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      navVisible: !this.state.navVisible,
      className: this.state.navVisible ? '' : 'nav-visible',
    });
  }

  render() {
    return (
      <header className={this.state.className}>
        <ThreeLineMenu className={this.state.className} handleClick={this.handleClick} />
        <NavOverlay className={this.state.className} handleClick={this.handleClick} />
      </header>
    );
  }
}
