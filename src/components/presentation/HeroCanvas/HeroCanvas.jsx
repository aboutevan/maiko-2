/* eslint-disable */
import React, { Component } from 'react';
import { scaleSpriteToCanvas, spritePaths, positionSprite, spriteOnMouseMove } from 'core/js/pixi.utils';
import * as PIXI from 'pixi.js';
import * as ass from 'img/a-base.png';

// LOADING BAR https://github.com/kittykatattack/learningPIXI/blob/master/README.md

export default class HeroCanvas extends Component {
  constructor(props) {
    super(props);

    this.pixiApp = new PIXI.Application(window.innerWidth, window.innerHeight);
    this.renderer = this.pixiApp.renderer;
    this.stage = this.pixiApp.stage;
    this.bgContainer = new PIXI.Container();
    this.layerAll = new PIXI.Container();
    this.layerRight = new PIXI.Container();
    this.layerLeft = new PIXI.Container();

    this.renderer.view.style.position = 'absolute';
    this.renderer.view.style.display = 'block';
    this.renderer.view.style.minHeight = 697;
    this.renderer.autoResize = true;

    this.sprites = spritePaths();

    this.addContainersToStage();
    this.addPathstoLoader();
    this.initPixiLoader();

    // const sprites = spritePaths();

    // const bunny = PIXI.Sprite.fromImage(sprites.abase);

    // bunny.anchor.set(0.7);

    // this.stage.addChild(bunny);


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
    // const PIXI = require('PIXI.js');
    // PIXI.utils.skipHello(); // disable PIXI banner in console

    // // define all cached variables
    // this.PIXIApp = new PIXI.Application(window.innerWidth, window.innerHeight);

    // const sprites = spritePaths();

    // const bunny = PIXI.Sprite.fromImage(sprites.abase);

    // bunny.anchor.set(0.5);

    // app.stage.addChild(bunny);

    // append it to component
    // PIXI generates its own canvas element, which has to be
    // appended to dom.  Here, this.component is assigned a reference
    // to the mounted component, using the 'ref' attribute in the
    // render method below. So, we are creating and appending our canvas
    // in one component, instead creating a component just to append to
    // another.  If we weren't using PIXI, we could just render a canvas
    // element directly

    this.component.appendChild(this.renderer.view);

    // manipulate the PIXI canvas

  }


  addContainersToStage() {
    this.layerAll.addChild(this.layerRight);
    this.layerAll.addChild(this.layerLeft);
    [
      this.bgContainer,
      this.layerAll,
    ].map(container => this.stage.addChild(container));
  }

  canvasSetup() {
    const resources = PIXI.loader.resources;

    this.layerRightChildren = [
      new PIXI.Sprite(resources[this.sprites.abase].texture)
    ]

    this.layerRightChildren.map(child => this.layerRight.addChild(child));
  }

  addPathstoLoader() {
    if (process.env.NODE_ENV !== 'production') {
      PIXI.loader.reset();
    }

    for (const path of Object.keys(this.sprites)) {
      PIXI.loader.add(this.sprites[path]);
    }

    console.log(PIXI.loader);

    // this.sprites.map(path => PIXI.loader.add(path));
  }

  initPixiLoader() {
    const setup = this.canvasSetup;
    PIXI.loader
      .load(setup.bind(this));
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
