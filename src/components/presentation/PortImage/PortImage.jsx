import React, { Component } from 'react';
import 'ScrollMagicGSAP';
import * as ScrollMagic from 'ScrollMagic'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved
// import 'TweenMax';

if (process.env.NODE_ENV !== 'production') {
  require('debugAddIndicators');
}

class PortImage extends Component {

  componentDidMount() {
    this.createScene();
  }

  createScene() {
    const portElement = `.port-image--${this.props.index}`;

    const sceneController = new ScrollMagic.Controller({
      addIndicators: false,
    });

    // let element = { y: 0 };

    // function applyTransform () {
    //     TweenMax.set(portElement, {
    //     y: `-${element.y}%`
    //   });
    // };

    // const tween = TweenMax.to(element, 1.2, {
    //   y: 0,
    //   onUpdate: applyTransform
    // });

    const tween = TweenMax.to(portElement, 1, {
      ease: Power0.easeNone,
      y: `-${(Math.max(Math.random(), 0.4)) * 100}%`,
    });

    new ScrollMagic.Scene({
      offset: 0,
      triggerElement: portElement,
      triggerHook: 1,
      duration: window.innerHeight * 2,
    })
    .setTween(tween)
    .addTo(sceneController);
  }

  render() {
    return (
      <div
        className={`port-image port-image--${this.props.index}`}
        // you could set props for attributes
        ref={(component) => { this.component = component; }}
      >
        <div className="port-image__inner">
          <img className="port-image__image" src={`/assets/img/${this.props.url}`} alt={this.props.title} />
        </div>
      </div>
    );
  }
}

PortImage.propTypes = {
  url: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
};


export default PortImage;
