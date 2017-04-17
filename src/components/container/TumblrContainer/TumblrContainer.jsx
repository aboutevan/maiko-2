import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Masonry from 'react-masonry-component';
import fetchTumblr from './actions';

class TumblrContainer extends Component {

  // static propTypes = {
  //   fetchTumblr: React.PropTypes.func.isRequired,
  // }

  // constructor(props) {
  //   super(props);

  //   this.state = { images: []}

  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleClick(event) {
    // event.preventDefault();
    this.props.fetchTumblr();
    console.log(this.props);
  }

  componentDidMount() {
    this.props.fetchTumblr();
  }

  render() {
    if(!this.props.tumblrImages[0]) {
      return (
        <h1>shit</h1>
      );
    } else {
      return (
      <div>
        <Masonry
          className={'whatever'}
          options={
            {columnWidth: 50,
              itemSelector: '.fuck'}
          }
        >
          {
            this.props.tumblrImages.map(arr => {
              console.log(arr.length)
              return arr
            }).map((image, index) => {
              console.log(image)
              // return (
              // <img className="fuck" key={image.post_url} src={image.photos[0].alt_sizes[1].url} />
              // );
          })}
        </Masonry>
        <button onClick={() => this.handleClick()} role="button">Click Me</button>
      </div>
    );
    }
  }
}

// Fetching App state
// TumblrContainer is key in rootReducer obj
function mapStateToProps(state) {
  return {
    tumblrImages: state.TumblrContainer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTumblr }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TumblrContainer);
