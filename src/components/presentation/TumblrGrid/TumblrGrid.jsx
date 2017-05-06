import React from 'react';
import Masonry from 'react-masonry-component';
import { LoadingContainer } from 'container';

const TumblrGrid = ({ tumblrReady, images }) => {
  function renderImages() {
    return (
      images.map(data => (
        <div key={data.photos[0].alt_sizes[1].url} className="tumblr-grid__image">
          <img alt="" src={data.photos[0].alt_sizes[1].url} />
        </div>
      ))
    );
  }

  if (!tumblrReady) {
    return (
      <div className="tumblr-grid__initial-load">
        <LoadingContainer />
      </div>
    );
  }
  return (
    <div className="tumblr-grid__wrapper">
      <Masonry
        className="tumblr-grid"
        options={{
          itemSelector: '.tumblr-grid__image',
          percentPosition: true,
          gutter: 0,
        }}
      >
        { renderImages() }
      </Masonry>
      <div className="tumblr-grid__loader">
        <LoadingContainer />
      </div>
    </div>
  );
};

TumblrGrid.propTypes = {
  images: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  tumblrReady: React.PropTypes.bool.isRequired,
};

export default TumblrGrid;
