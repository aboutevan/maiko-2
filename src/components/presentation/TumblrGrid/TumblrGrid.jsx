import React from 'react';
import Masonry from 'react-masonry-component';

const TumblrGrid = ({ images }) => {
  function renderImages() {
    return (
      images.map(data => (
        <div key={data.photos[0].alt_sizes[1].url} className="tumblr-grid__image" style={{backgroundImage: `url(${data.photos[0].alt_sizes[1].url})`}}>
          <img alt=""  src={data.photos[0].alt_sizes[1].url} />
        </div>
      ))
    );
  }

  function handleImagesLoaded() {
    console.log('images loaded')
  }

  return (
    <Masonry
      className='tumblr-grid'
      options={{
        itemSelector: '.tumblr-grid__image',
        percentPosition: true,
        gutter: 0
      }}
      onImagesLoaded={handleImagesLoaded}
      disableImagesLoaded={false}
      updateOnEachImageLoad={true}
    >
      { renderImages() }
    </Masonry>
  );
};

TumblrGrid.propTypes = {
  images: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default TumblrGrid;
