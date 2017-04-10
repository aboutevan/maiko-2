import React from 'react';

const PortImage = ({ index, url, title }) => (
  <div className={`port-image port-image--${index}`}>
    <img src={`/assets/img/${url}`} alt={title} />
  </div>
);

PortImage.propTypes = {
  url: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
};


export default PortImage;
