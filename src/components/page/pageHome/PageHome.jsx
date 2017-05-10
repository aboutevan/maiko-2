import React from 'react';
import { HeroCanvas, PortImage } from 'presentation';
import { GalleryConfig } from 'config';

const PageHome = () => (
  <div className="page-home">
    <div className="page-home__hero">
      <HeroCanvas />
    </div>
    <div className="page-home__content">
      <div className="page-home__gallery-wrap">
        {GalleryConfig.map((image, i) => (
          <PortImage key={image.url} index={i + 1} url={image.url} title={image.title} />
        ))}
      </div>
    </div>
  </div>
);

export default PageHome;
