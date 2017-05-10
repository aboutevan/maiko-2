import React, { Component } from 'react';
import * as disableScroll from 'disable-scroll';
import 'TweenMax';

const images = require.context('img/transition', true, /\.(png|jpg)$/).keys();

const imagesArr = [];

images.map(image => {
  const newImageVal = image.replace(/^[^\/]*\//g, '');
  imagesArr.push(newImageVal);
});

  console.log(imagesArr);

console.log(imagesArr[Math.floor(Math.random() * images.length)]);

class SlideTransition extends Component {

  static propTypes = {
    behavior: React.PropTypes.string.isRequired,
  }

  componentDidUpdate() {
    const innerOffset = '1000vw';
    if (this.props.behavior !== 'animate') {
      TweenMax.set(this.component, {
        left: '-120vw',
      });
      TweenMax.set(this.component.children, {
        x: innerOffset,
      });
      return;
    }

    TweenMax.fromTo(this.component, 1.3, {
      left: '-120vw',
    }, {
      left: '100vw',
      ease: SlowMo.ease.config(0.2, 0.5, false),
      onStart: () => { disableScroll.on(); },
    });
    TweenMax.fromTo(this.component.children, 1.3, {
      x: innerOffset,
    }, {
      x: `-${innerOffset}`,
      ease: SlowMo.ease.config(0.2, 0.5, false),
      onComplete: () => { disableScroll.off(); },
    });
  }

  render() {
    return (
      <div className="slide-transition__container">
        <div
          className="slide-transition"
          ref={(component) => { this.component = component; }}
        >
          <div className="slide-transition__image">
            <img src={`/assets/img/transition/${imagesArr[Math.floor(Math.random() * images.length)]}`} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default SlideTransition;
