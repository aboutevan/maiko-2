/* eslint-disable */
import React, { Component } from 'react';
import { scaleSpriteToCanvas, spritePaths, positionSprite, spriteOnMouseMove } from 'core/js/pixi.utils';
import * as PIXI from 'pixi.js';

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

  createFilters() {
    const resources = PIXI.loader.resources;

    // layers
    this.layerDpSprite = new PIXI.Sprite(resources[this.sprites.displacement].texture);
    this.layerDpFilter = new PIXI.filters.DisplacementFilter(this.layerDpSprite);
    this.layerDpSprite.width = window.innerWidth;
    this.layerAll.addChild(this.layerDpSprite);

    // bg
    this.bgDpSprite = new PIXI.Sprite(resources[this.sprites.displacement5].texture);
    // scaleSpriteToCanvas(this.bgDpSprite, this.renderer.view);
    this.bgDpFilter = new PIXI.filters.DisplacementFilter(this.bgDpSprite);
    this.bgDpFilter.scale.x = this.bgDpFilter.scale.y = 60;
    this.bgContainer.addChild(this.bgDpSprite);

    // repeat pixi v4
    this.displacementTexture = PIXI.Texture.fromImage(this.sprites.displacement5);
    this.dTexture = PIXI.Texture.fromImage(this.sprites.displacement);
    this.displacementTexture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    this.dTexture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  }

  createAndAddSprites() {
    const resources = PIXI.loader.resources;

    this.layerRightChildren = [
      // M 0,1
      new PIXI.Sprite(resources[this.sprites.mbase].texture),
      new PIXI.Sprite(resources[this.sprites.mfade].texture),
      // A 2,3
      new PIXI.Sprite(resources[this.sprites.abase].texture),
      new PIXI.Sprite(resources[this.sprites.afade].texture),
      // I 4,5
      new PIXI.Sprite(resources[this.sprites.ibase].texture),
      new PIXI.Sprite(resources[this.sprites.ifade].texture),
      // O 6,7
      new PIXI.Sprite(resources[this.sprites.obase].texture),
      new PIXI.Sprite(resources[this.sprites.ofade].texture),
      // H 8,9
      new PIXI.Sprite(resources[this.sprites.hbase].texture),
      new PIXI.Sprite(resources[this.sprites.hfade].texture),
      // C 10,11
      new PIXI.Sprite(resources[this.sprites.cbase].texture),
      new PIXI.Sprite(resources[this.sprites.cfade].texture),
      // KO 12, 13
      new PIXI.Sprite(resources[this.sprites.kobase].texture),
      new PIXI.Sprite(resources[this.sprites.kofade].texture),
      // BA 14, 15
      new PIXI.Sprite(resources[this.sprites.babase].texture),
      new PIXI.Sprite(resources[this.sprites.bafade].texture),
    ]

    this.layerRightChildren.map(child => this.layerRight.addChild(child));

    this.layerLeftChildren = [
      // MAI 0,1
      new PIXI.Sprite(resources[this.sprites.maibase].texture),
      new PIXI.Sprite(resources[this.sprites.maifade].texture),
      // A Small 2,3
      new PIXI.Sprite(resources[this.sprites.asmbase].texture),
      new PIXI.Sprite(resources[this.sprites.asmfade].texture),
      // K 4,5
      new PIXI.Sprite(resources[this.sprites.kbase].texture),
      new PIXI.Sprite(resources[this.sprites.kfade].texture),
      // B 6,7
      new PIXI.Sprite(resources[this.sprites.bbase].texture),
      new PIXI.Sprite(resources[this.sprites.bfade].texture),
      // I small 8,9
      new PIXI.Sprite(resources[this.sprites.ismbase].texture),
      new PIXI.Sprite(resources[this.sprites.ismfade].texture),
      // CH 10,11
      new PIXI.Sprite(resources[this.sprites.chbase].texture),
      new PIXI.Sprite(resources[this.sprites.chfade].texture),
      // II 12,13
      new PIXI.Sprite(resources[this.sprites.iibase].texture),
      new PIXI.Sprite(resources[this.sprites.iifade].texture),
    ];

    this.layerLeftChildren.map(child => this.layerRight.addChild(child));
  }

  canvasSetup() {
    this.createFilters();
    this.createAndAddSprites();
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
