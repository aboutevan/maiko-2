/* eslint-disable */
import React, { Component } from 'react';
import { scaleSpriteToCanvas, spritePaths, positionSprite, spriteOnMouseMove } from 'core/js/pixi.utils';
import * as pixi from 'pixi.js';
import * as ass from 'img/a-base.png';

// LOADING BAR https://github.com/kittykatattack/learningpixi/blob/master/README.md

export default class HeroCanvas extends Component {
  constructor(props) {
    super(props);


    this.settings = {
      transition: 3,
      speed: 1,
      dispScale: 200,
      dispX: false,
      dispY: true,
      count: 0,
      alpha: 113, 
    };


    // dispose of appended elements while hot reloading
    if (module.hot) {
      module.hot.dispose(() => {
        this.component.removeChild(this.renderer.view);
      });
    }
  }

  componentDidMount() {
    // scripts called in componentDidMount will not execute
    // until after component is rendered. This means we can
    // use scripts meant for use in browser in our server-side
    // apps - the scripts won't be passed to our Node server and
    // result in undefined errors - not the greatest solution
    // const pixi = require('pixi.js');
    // pixi.utils.skipHello(); // disable pixi banner in console

    // // define all cached variables
    // this.pixiApp = new pixi.Application(window.innerWidth, window.innerHeight);

    // const sprites = spritePaths();

    // const bunny = pixi.Sprite.fromImage(sprites.abase);

    // bunny.anchor.set(0.5);

    // app.stage.addChild(bunny);

    // append it to component
    // pixi generates its own canvas element, which has to be
    // appended to dom.  Here, this.component is assigned a reference
    // to the mounted component, using the 'ref' attribute in the
    // render method below. So, we are creating and appending our canvas
    // in one component, instead creating a component just to append to
    // another.  If we weren't using pixi, we could just render a canvas
    // element directly
    // 
    
    this.pixiApp = new pixi.Application(window.innerWidth, window.innerHeight);
    this.renderer = this.pixiApp.renderer;
    this.stage = this.pixiApp.stage;
    this.bgContainer = new pixi.Container();

    const sprites = spritePaths();

    const bunny = pixi.Sprite.fromImage(sprites.abase);

    bunny.anchor.set(0.2);

    this.stage.addChild(bunny);

    this.component.appendChild(this.renderer.view);

    // manipulate the pixi canvas

  }




  render() {
    return (
      <div
        className="hero-canvas"
        ref={(component) => { this.component = component; }}
      />
    );
  }

}
