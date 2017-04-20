import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Masonry from 'react-masonry-component';
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
    this.props.fetchTumblr();
  }

  componentWillUnmount() {
    this.state.images = [];
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.images.length < this.props.tumblr.total_posts) {
      this.props.fetchTumblr(2, this.state.images.length);
    }
  }

  renderImages() {
    this.props.tumblr.posts.map(data => (
       this.state.images.push(data)
      ),
    );
    console.log('Rendering Images');
    return (
      this.state.images.map((data, i) => (
        <img className="fuck" key={`data.post_url${i}`} alt="" src={data.photos[0].alt_sizes[1].url} />
      ))
    );
  }

  render() {
    if (!this.props.tumblr) {
      return (
        <h1>LoadingComponent</h1>
      );
    }
    return (
      <div>
        <Masonry
          className={'whatever'}
          options={{
            columnWidth: 50,
            itemSelector: '.fuck',
          }}
        >
          { this.renderImages() }
        </Masonry>
        <LoadingContainer />
        <button onClick={this.handleClick} role="button">Click Me</button>
      </div>
    );
  }
}

function mapStateToProps({ TumblrContainer }) {
  return {
    tumblr: TumblrContainer[0],
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTumblr }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TumblrContainer);
