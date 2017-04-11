import React, { Component } from 'react';
// import * as ScrollMagic from 'ScrollMagic';
// import 'ScrollMagicGSAP';
// import { setTween, TweenMax } from 'gsap';

class PortImage extends Component {

  // constructor(props) {
  //   super(props);
  // }

  createScene() {
    const sceneController = new ScrollMagic.Controller();

    // const tween = TweenMax.to(this.component, 0.5, {
    //   x: '100%'
    // })

    new ScrollMagic.Scene({
      offset: 0,
      triggerHook: 'onEnter',
      duration: 1000,
    })
    .setTween(this.component, 0.5, {
      y: '-100%'
    })
    .addTo(sceneController);

    console.log(this.component);
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
