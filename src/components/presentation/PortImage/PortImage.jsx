import React, { Component } from 'react';
import * as ScrollMagic from 'ScrollMagic';
import 'ScrollMagicGSAP';
import 'TweenMax';

if (process.env.NODE_ENV !== 'production') {
  require('debugAddIndicators');
}

class PortImage extends Component {

  createScene() {
    const portElement = `.port-image--${this.props.index}`;

    const sceneController = new ScrollMagic.Controller({
      addIndicators: false
    });

    let element = { y: 0 };

    function applyTransform () {
        TweenMax.set(portElement, {
        y: `-${element.y}%`
      });
    };

    const tween = TweenMax.to(element, 1.2, {
      y: Math.max(Math.random(), 0.6) * 100,
      onUpdate: applyTransform
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

  componentDidMount() {
    this.createScene();
  }

  render() {
    return (
      <div
        className={`port-image port-image--${this.props.index}`}
        // you could set props for attributes
        ref={(component) => { this.component = component; }}
      >
        <img src={`/assets/img/${this.props.url}`} alt={this.props.title} />
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
