import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TumblrImage } from 'presentation';
import { LoadingContainer } from 'container';
import { fetchTumblr } from './actions';

class TumblrContainer extends Component {

  static propTypes = {
    fetchTumblr: React.PropTypes.func.isRequired,
    tumblr: React.PropTypes.objectOf(React.PropTypes.any),
  }

  static defaultProps = {
    tumblr: null,
  }

  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.state.images = [];
    this.props.fetchTumblr();
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.images.length < this.props.tumblr.total_posts) {
      this.props.fetchTumblr(3, this.state.images.length);
    }
  }

  pushImagesToLocalStorage() {
    this.props.tumblr.posts.map(data => (
       this.state.images.push(data)
      ),
    );
  }

  render() {
    if (!this.props.tumblr) {
      return (
        <LoadingContainer />
      );
    }
    this.pushImagesToLocalStorage();
    return (
      <div>
        <TumblrImage images={this.state.images} />
        <LoadingContainer />
        <button onClick={this.handleClick} role="button">Click Me</button>
      </div>
    );
  }
}

function mapStateToProps({ tumblr }) {
  return {
    tumblr: tumblr[0],
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTumblr }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TumblrContainer);
