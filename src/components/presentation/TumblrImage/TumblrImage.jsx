import React, { Component } from 'react';
import { LoadingContainer } from 'container';
import Masonry from 'react-masonry-component';

const TumblrImage = ({images}) => {

  function renderImages() {
    return (
      images.map(data => (
        <img key={data.photos[0].alt_sizes[1].url} alt="" src={data.photos[0].alt_sizes[1].url} />
      ))
    );
  }

  return (
    <Masonry
      className={'whatever'}
      options={{
        columnWidth: 50,
        itemSelector: '.fuck',
      }}
    >
      { renderImages() }
    </Masonry>
  );
};

TumblrImage.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default TumblrImage;
