import React from 'react';
import { Helmet } from 'react-helmet';
import { TumblrContainer } from 'container';

const PageStudioShots = () => (
  <div className="page-studio-shots main-row">
    <Helmet>
      <title>Studio Shots | Special Effects Artist Los Angeles | Maiko Chiba</title>
      <meta name="description" content="Maiko Chiba is a Special Effects Artist working in Los Angeles" />
    </Helmet>
    <div>
      <TumblrContainer />
    </div>
  </div>
);

export default PageStudioShots;
