import React, { Component } from 'react';
import { Header, Footer } from 'presentation';
import { SlideTransitionContainer } from 'container';
import TweenMax from 'TweenMax';

class LayoutMain extends Component {
  componentDidMount() {
    TweenMax.fromTo(this.loadBar, 3.6, {
      width: '0%',
    }, {
      width: '100%',
      ease: Expo.easeInOut,
      onComplete: () => {
        TweenMax.to(this.loader, 0.5, {
          opacity: 0,
          onComplete: () => {
            this.loader.remove();
          },
        });
      },
    });
  }
  render() {
    return (
      <div className="layout-main">
        <Header />
        <SlideTransitionContainer />
        <div
          className="layout-main__loader"
          ref={(loader) => { this.loader = loader; }}
        >
          <div className="layout-main__load-bar-wrapper">
            <div
              ref={(loadBar) => { this.loadBar = loadBar; }}
              className="layout-main__load-bar"
            />
          </div>
        </div>
        <main className="layout-main__content">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

LayoutMain.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default LayoutMain;
