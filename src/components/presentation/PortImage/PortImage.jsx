import React, { Component } from 'react';
// import React from 'react';
import * as ScrollMagic from 'ScrollMagic';
import 'ScrollMagicGSAP';
import 'TweenMax';

if (process.env.NODE_ENV !== 'production') {
  require('debugAddIndicators');
}

class PortImage extends Component {

  // constructor(props) {
  //   super(props);
  // }

  createScene() {
    const portElement = `.port-image--${this.props.index}`;

    const sceneController = new ScrollMagic.Controller({
      addIndicators: false
    });

    // const tween = TweenMax.to(this.component, 0.5, {
    //   x: '100%'
    // })

    // let element = { y: 0 };

    // function applyBlur () {
    //     TweenMax.set(portElement, {
    //     y: `-${element.y}%`
    //   });
    // };

    // const tween = TweenMax.to(element, 0.8, {
    //   y: 100,
    //   onUpdate: applyBlur
    // });

    new ScrollMagic.Scene({
      offset: 0,
      triggerElement: portElement,
      triggerHook: 1,
      duration: window.innerHeight * 2,
    })
    .setTween(portElement, 1, {
      y: `-${Math.max(Math.random(), 0.5) * 100}%`
    })
    // .setTween(tween)
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

// const PortImage = ({ index, url, title }) => (
//   <div className={`port-image port-image--${index}`}>
//     <img src={`/assets/img/${url}`} alt={title} />
//   </div>
// );

PortImage.propTypes = {
  url: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
};


export default PortImage;
