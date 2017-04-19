import React, { Component } from 'react';
import { LayoutMain } from 'layout';
import { HeroCanvas, PortImage } from 'presentation';
import { GalleryConfig } from 'config';

class PageHome extends Component {
  componentDidMount() {
    console.log("HomePage Mounted");
  }
  componentWillUnmount() {
    console.log("HomePage Unmounted");
  }
  render() {
    return (
      <LayoutMain>
        <div className="page-home">

          <div className="page-home__hero">
            <HeroCanvas key={Math.random()} />
          </div>
          <div className="page-home__content">
            {GalleryConfig.map((image, i) => (
              <PortImage key={image.url} index={i + 1} url={image.url} title={image.title} />
              ))}
          </div>
        </div>
      </LayoutMain>
    );
  }
}

// const PageHome = () => (
//   <LayoutMain>
//     <div className="page-home">

//       <div className="page-home__hero">
//         <HeroCanvas key={Math.random()} />
//       </div>
//       <div className="page-home__content">
//         {GalleryConfig.map((image, i) => (
//           <PortImage key={image.url} index={i + 1} url={image.url} title={image.title} />
//           ))}
//       </div>
//     </div>
//   </LayoutMain>
// );

export default PageHome;
