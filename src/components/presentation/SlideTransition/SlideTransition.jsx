import React, { Component } from 'react';
import 'TweenMax';

class SlideTransition extends Component {

  componentDidUpdate() {
    console.log(this.component.children)
    const innerOffset = '1000vw';
    if(this.props.position !== 'animate') {
        TweenMax.set(this.component, {
          left: '-120vw'
        })
        TweenMax.set(this.component.children, {
          x: innerOffset
        })
        return
    }
    TweenMax.fromTo(this.component, 1.3, {
      left: '-120vw',
    }, {
      left: '100vw',
      ease: SlowMo.ease.config(0.2, 0.5, false)
    })
    TweenMax.fromTo(this.component.children, 1.3, {
      x: innerOffset,
    }, {
      x: `-${innerOffset}`,
      ease: SlowMo.ease.config(0.2, 0.5, false)
    })
    return
  }

  render () {
    return (
      <div className='slide-transition'
        ref={(component) => { this.component = component; }}
      >
        <div className="slide-transition__image">
          <img src="/assets/img/skull.jpg" alt=""/>
        </div>
      </div>
    );
  }
}

export default SlideTransition;