import React from 'react';
import { Helmet } from 'react-helmet';
import { HeroCanvas, PortImage } from 'presentation';
import { GalleryConfig } from 'config';

const PageHome = () => (
  <div className="page-home">
    <Helmet>
      <title>Special Effects Artist Los Angeles | Maiko Chiba</title>
      <meta name="description" content="Maiko Chiba is a Special Effects Artist working in Los Angeles" />
    </Helmet>
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
