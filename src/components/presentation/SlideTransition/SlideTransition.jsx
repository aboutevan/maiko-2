import React, { Component } from 'react';
import 'TweenMax';

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
      onStart: () => { document.body.style.overflow = 'hidden'},
    });
    TweenMax.fromTo(this.component.children, 1.3, {
      x: innerOffset,
    }, {
      x: `-${innerOffset}`,
      ease: SlowMo.ease.config(0.2, 0.5, false),
      onComplete: () => { document.body.style.overflow = 'visible'},
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
            <img src="/assets/img/skull.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default SlideTransition;
