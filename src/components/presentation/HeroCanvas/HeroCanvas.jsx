import React, { Component } from 'react';
import { scaleSpriteToCanvas, spritePaths, positionSprite, spriteOnMouseMove } from 'core/js/pixi.utils';

// LOADING BAR https://github.com/kittykatattack/learningPixi/blob/master/README.md

export default class HeroCanvas extends Component {
  constructor(props) {
    super(props);

    this.settings = {
      transition: 3,
      speed: 1,
      dispScale: 20,
      dispX: false,
      dispY: true,
      count: 0,
      alpha: 1,
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
    const PIXI = require('pixi.js');
    PIXI.utils.skipHello(); // disable pixi banner in console

    // define all cached variables
    this.pixi = PIXI;
    this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
    this.stage = new PIXI.Container();
    this.bgContainer = new PIXI.Container();
    // this.stage.addChild(this.bgContainer);
    this.layerAll = new PIXI.Container();
    this.layerRight = new PIXI.Container();
    this.layerLeft = new PIXI.Container();

    // base canvas styles
    this.renderer.view.style.position = 'absolute';
    this.renderer.view.style.display = 'block';
    this.renderer.view.style.minHeight = 697;
    this.renderer.autoResize = true;
    const canvas = this.renderer.view;

    // append it to component
    // Pixi generates its own canvas element, which has to be
    // appended to dom.  Here, this.component is assigned a reference
    // to the mounted component, using the 'ref' attribute in the
    // render method below. So, we are creating and appending our canvas
    // in one component, instead creating a component just to append to
    // another.  If we weren't using Pixi, we could just render a canvas
    // element directly
    this.component.appendChild(canvas);

    // manipulate the pixi canvas
    this.addContainersToStage();
    this.addPathstoLoader();
    this.initPixiLoader();
    this.animate();
  }

  setSpritePositions() {
    /*eslint-disable*/
    if (window.innerWidth < 768) {
      this.layerRight.y = window.innerHeight * 0.2;
      this.layerLeft.y = window.innerHeight * 0.2;
      // M
      positionSprite([this.layerRightChildren[0], this.layerRightChildren[1]], window.innerWidth * 0.2, window.innerHeight * 0.05, 0.35);
      // A
      positionSprite([this.layerRightChildren[2], this.layerRightChildren[3]], window.innerWidth * 0.25, window.innerHeight * 0.14, 0.35);
      // I
      positionSprite([this.layerRightChildren[4], this.layerRightChildren[5]], window.innerWidth * 0.53, window.innerHeight * 0.07, 0.35);
      // K
      positionSprite([this.layerLeftChildren[4], this.layerLeftChildren[5]], window.innerWidth * 0.52, window.innerHeight * 0.2, 0.35);
      // O
      positionSprite([this.layerRightChildren[6], this.layerRightChildren[7]], window.innerWidth * 0.67, window.innerHeight * 0.18, 0.35);
      // C
      positionSprite([this.layerRightChildren[10], this.layerRightChildren[11]], window.innerWidth * 0.15, window.innerHeight * 0.32, 0.35);
      // H
      positionSprite([this.layerRightChildren[8], this.layerRightChildren[9]], window.innerWidth * 0.4, window.innerHeight * 0.29, 0.35);
      // I
      positionSprite([this.layerLeftChildren[8], this.layerLeftChildren[9]], window.innerWidth * 0.32, window.innerHeight * 0.57, 0.35);
      // B
      positionSprite([this.layerLeftChildren[6], this.layerLeftChildren[7]], window.innerWidth * 0.67, window.innerHeight * 0.52, 0.35);
      // A
      positionSprite([this.layerLeftChildren[2], this.layerLeftChildren[3]], window.innerWidth * 0.85, window.innerHeight * 0.27, 0.35);
      // MAI
      positionSprite([this.layerLeftChildren[0], this.layerLeftChildren[1]], window.innerWidth * 0.73, window.innerHeight * 0.1, 0.35);
      // KO
      positionSprite([this.layerRightChildren[12], this.layerRightChildren[13]], window.innerWidth * 0.64, window.innerHeight * 0.37, 0.35);
      // CH
      positionSprite([this.layerLeftChildren[10], this.layerLeftChildren[11]], window.innerWidth * 0.4, window.innerHeight * 0, 0.35);
      // II
      positionSprite([this.layerLeftChildren[12], this.layerLeftChildren[13]], window.innerWidth * 0.15, window.innerHeight * 0.45, 0.35);
      // BA
      positionSprite([this.layerRightChildren[14], this.layerRightChildren[15]], window.innerWidth * 0.4, window.innerHeight * 0.47, 0.35);
    } else {
      this.layerRight.y = window.innerHeight * 0.15;
      this.layerLeft.y = window.innerHeight * 0.15;
      // M
      positionSprite([this.layerRightChildren[0], this.layerRightChildren[1]], window.innerWidth * 0.3, window.innerHeight * 0.04, 0.5);
      // A
      positionSprite([this.layerRightChildren[2], this.layerRightChildren[3]], window.innerWidth * 0.38, window.innerHeight * 0.2, 0.5);
      // I
      positionSprite([this.layerRightChildren[4], this.layerRightChildren[5]], window.innerWidth * 0.53, window.innerHeight * 0.11, 0.5);
      // K
      positionSprite([this.layerLeftChildren[4], this.layerLeftChildren[5]], window.innerWidth * 0.595, window.innerHeight * 0.31, 0.5);
      // O
      positionSprite([this.layerRightChildren[6], this.layerRightChildren[7]], window.innerWidth * 0.67, window.innerHeight * 0.14, 0.5);
      // C
      positionSprite([this.layerRightChildren[10], this.layerRightChildren[11]], window.innerWidth * 0.19, window.innerHeight * 0.41, 0.5);
      // H
      positionSprite([this.layerRightChildren[8], this.layerRightChildren[9]], window.innerWidth * 0.475, window.innerHeight * 0.41, 0.55);
      // I
      positionSprite([this.layerLeftChildren[8], this.layerLeftChildren[9]], window.innerWidth * 0.43, window.innerHeight * 0.6, 0.5);
      // B
      positionSprite([this.layerLeftChildren[6], this.layerLeftChildren[7]], window.innerWidth * 0.62, window.innerHeight * 0.58, 0.5);
      // A
      positionSprite([this.layerLeftChildren[2], this.layerLeftChildren[3]], window.innerWidth * 0.78, window.innerHeight * 0.27, 0.45);
      // MAI
      positionSprite([this.layerLeftChildren[0], this.layerLeftChildren[1]], window.innerWidth * 0.63, window.innerHeight * 0.03, 0.5);
      // KO
      positionSprite([this.layerRightChildren[12], this.layerRightChildren[13]], window.innerWidth * 0.65, window.innerHeight * 0.40, 0.5);
      // CH
      positionSprite([this.layerLeftChildren[10], this.layerLeftChildren[11]], window.innerWidth * 0.455, window.innerHeight * 0, 0.5);
      // II
      positionSprite([this.layerLeftChildren[12], this.layerLeftChildren[13]], window.innerWidth * 0.265, window.innerHeight * 0.25, 0.5);
      // BA
      positionSprite([this.layerRightChildren[14], this.layerRightChildren[15]], window.innerWidth * 0.31, window.innerHeight * 0.485, 0.4);
    }
    /*eslint-enable*/
  }

  createFilters() {
    const PIXI = this.pixi;
    const resources = PIXI.loader.resources;

    // layers
    this.layerDpSprite = new PIXI.Sprite(resources[spritePaths.displacement].texture);
    console.log(this.layerDpSprite);
    this.layerDpFilter = new PIXI.filters.DisplacementFilter(this.layerDpSprite);
    this.layerDpSprite.width = window.innerWidth;
    this.layerAll.addChild(this.layerDpSprite);

    // bg
    this.bgDpSprite = new PIXI.Sprite(resources[spritePaths.displacement5].texture);
    // scaleSpriteToCanvas(this.bgDpSprite, this.renderer.view);
    this.bgDpFilter = new PIXI.filters.DisplacementFilter(this.bgDpSprite);
    this.bgDpFilter.scale.x = this.bgDpFilter.scale.y = 60;
    this.bgContainer.addChild(this.bgDpSprite);

    // repeat pixi v4
    this.displacementTexture = PIXI.Texture.fromImage(spritePaths.displacement5);
    this.dTexture = PIXI.Texture.fromImage(spritePaths.displacement);
    this.displacementTexture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    this.dTexture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  }

  createAndAddSprites() {
    const PIXI = this.pixi;
    const resources = PIXI.loader.resources;

    // layerRight
    this.layerRightChildren = [
      // M 0,1
      new PIXI.Sprite(resources[spritePaths.mbase].texture),
      new PIXI.Sprite(resources[spritePaths.mfade].texture),
      // A 2,3
      new PIXI.Sprite(resources[spritePaths.abase].texture),
      new PIXI.Sprite(resources[spritePaths.afade].texture),
      // I 4,5
      new PIXI.Sprite(resources[spritePaths.ibase].texture),
      new PIXI.Sprite(resources[spritePaths.ifade].texture),
      // O 6,7
      new PIXI.Sprite(resources[spritePaths.obase].texture),
      new PIXI.Sprite(resources[spritePaths.ofade].texture),
      // H 8,9
      new PIXI.Sprite(resources[spritePaths.hbase].texture),
      new PIXI.Sprite(resources[spritePaths.hfade].texture),
      // C 10,11
      new PIXI.Sprite(resources[spritePaths.cbase].texture),
      new PIXI.Sprite(resources[spritePaths.cfade].texture),
      // KO 12, 13
      new PIXI.Sprite(resources[spritePaths.kobase].texture),
      new PIXI.Sprite(resources[spritePaths.kofade].texture),
      // BA 14, 15
      new PIXI.Sprite(resources[spritePaths.babase].texture),
      new PIXI.Sprite(resources[spritePaths.bafade].texture),
    ];

    this.layerRightChildren.map(child => this.layerRight.addChild(child)
    );

    // layerLeft container

    this.layerLeftChildren = [
      // MAI 0,1
      new PIXI.Sprite(resources[spritePaths.maibase].texture),
      new PIXI.Sprite(resources[spritePaths.maifade].texture),
      // A Small 2,3
      new PIXI.Sprite(resources[spritePaths.a-smbase].texture),
      new PIXI.Sprite(resources[spritePaths.a-smfade].texture),
      // K 4,5
      new PIXI.Sprite(resources[spritePaths.kbase].texture),
      new PIXI.Sprite(resources[spritePaths.kfade].texture),
      // B 6,7
      new PIXI.Sprite(resources[spritePaths.bbase].texture),
      new PIXI.Sprite(resources[spritePaths.bfade].texture),
      // I small 8,9
      new PIXI.Sprite(resources[spritePaths.i-smbase].texture),
      new PIXI.Sprite(resources[spritePaths.i-smfade].texture),
      // CH 10,11
      new PIXI.Sprite(resources[spritePaths.chbase].texture),
      new PIXI.Sprite(resources[spritePaths.chfade].texture),
      // II 12,13
      new PIXI.Sprite(resources[spritePaths.iibase].texture),
      new PIXI.Sprite(resources[spritePaths.iifade].texture),
    ];

    this.layerLeftChildren.map(child => this.layerLeft.addChild(child));
  }

  storeSpritePositions() {
    this.orgSpritePosRight = [];
    this.layerRightChildren.map((sprite) => {
      const spritePosObj = {
        x: sprite.x,
        y: sprite.y,
      };
      return this.orgSpritePosRight.push(spritePosObj);
    });

    this.orgSpritePosLeft = [];
    this.layerLeftChildren.map((sprite) => {
      const spritePosObj = {
        x: sprite.x,
        y: sprite.y,
      };
      return this.orgSpritePosLeft.push(spritePosObj);
    });
  }

  layersConfig() {
    // this.layerRight.filters = [this.layerDpFilter];
    // this.layerLeft.filters = [this.layerDpFilter];
    // this.layerRight.alpha = 0.9;
    // this.layerLeft.alpha = 0.9;
    this.layerAll.filters = [this.layerDpFilter]
    // scaleSpriteToCanvas(this.layerAll, this.renderer.view);
  }

  backgroundConfig() {
    const PIXI = this.pixi;
    const resources = PIXI.loader.resources;

    this.background = new PIXI.Sprite(resources[spritePaths.darkness10].texture);
    scaleSpriteToCanvas(this.background, this.renderer.view);

    this.bgContainer.alpha = 0.35;
    this.bgContainer.addChild(this.background);
    this.bgContainer.filters = [this.bgDpFilter, this.layerDpFilter];
  }

  addPathstoLoader() {
    const PIXI = this.pixi;

    // reset for HMR
    if (process.env.NODE_ENV === 'development') {
      PIXI.loader.reset();
    }

    // add sprites
    // PIXI.loader.add('abase')
    spritePaths.map(path => PIXI.loader.add(path));
  }

  addContainersToStage() {
    this.layerAll.addChild(this.layerRight);
    this.layerAll.addChild(this.layerLeft);
    [
      this.bgContainer,
      this.layerAll,
    ].map(container => this.stage.addChild(container));
  }

  moveSprites() {
    // M
    spriteOnMouseMove.apply(this, [
      this.layerRightChildren, [0, 1], false, { x: 0.96, y: 0.81, mouseRatio: 0.0003 },
    ]);
    // A
    spriteOnMouseMove.apply(this, [
      this.layerRightChildren, [2, 3], false, { x: 0.82, y: 0.72, mouseRatio: 0.0007 },
    ]);
    // I
    spriteOnMouseMove.apply(this, [
      this.layerRightChildren, [4, 5], false, { x: 0.95, y: 0.8, mouseRatio: 0.0005 },
    ]);
    // o
    spriteOnMouseMove.apply(this, [
      this.layerRightChildren, [6, 7], false, { x: 0.98, y: 0.96, mouseRatio: 0.0002 },
    ]);
    // H
    spriteOnMouseMove.apply(this, [
      this.layerRightChildren, [8, 9], false, { x: 0.86, y: 0.81, mouseRatio: 0.00095 },
    ]);
    // C
    spriteOnMouseMove.apply(this, [
      this.layerRightChildren, [10, 11], false, { x: 0.91, y: 0.95, mouseRatio: 0.0005 },
    ]);
    // KO
    spriteOnMouseMove.apply(this, [
      this.layerRightChildren, [12, 13], false, { x: 0.98, y: 0.99, mouseRatio: 0.00025 },
    ]);
    // BA
    spriteOnMouseMove.apply(this, [
      this.layerRightChildren, [14, 15], false, { x: 0.98, y: 0.99, mouseRatio: 0.00025 },
    ]);

    // MAI
    spriteOnMouseMove.apply(this, [
      this.layerLeftChildren, [0, 1], true, { x: 1.01, y: 1.01, mouseRatio: 0.0002 },
    ]);
    // A SMALL
    spriteOnMouseMove.apply(this, [
      this.layerLeftChildren, [2, 3], true, { x: 1.035, y: 1.09, mouseRatio: 0.0008 },
    ]);
    // K
    spriteOnMouseMove.apply(this, [
      this.layerLeftChildren, [4, 5], true, { x: 1.01, y: 1.01, mouseRatio: 0.00018 },
    ]);
    // B
    spriteOnMouseMove.apply(this, [
      this.layerLeftChildren, [6, 7], true, { x: 1.01, y: 1.01, mouseRatio: 0.0002 },
    ]);
    // I small
    spriteOnMouseMove.apply(this, [
      this.layerLeftChildren, [8, 9], true, { x: 1.05, y: 1.04, mouseRatio: 0.0015 },
    ]);
    // CH
    spriteOnMouseMove.apply(this, [
      this.layerLeftChildren, [10, 11], true, { x: 1.04, y: 4, mouseRatio: 0.0003 },
    ]);
    // II
    spriteOnMouseMove.apply(this, [
      this.layerLeftChildren, [12, 13], true, { x: 1.04, y: 1.06, mouseRatio: 0.0002 },
    ]);

    // this.layerRightChildren.map(child => {
    //   if (this.layerRightChildren.indexOf(child) % 2 === 0) {
    //     const index = this.layerRightChildren.indexOf(child)
    //     spriteOnMouseMove.apply(this, [
    //       this.layerRightChildren, [index, index + 1]
    //     ]);
    //   }
    // })
  }

  canvasSetup() {
    this.createFilters();
    this.createAndAddSprites();
    this.backgroundConfig();
    this.layersConfig();
    this.setSpritePositions();
    this.storeSpritePositions();

    // all mousemove events
    this.renderer.plugins.interaction.on('mousemove', (event) => {
      this.mouseX = event.data.global.x;
      this.mouseY = event.data.global.y;
    });

    // scroll events

    window.addEventListener('scroll', () => {
      this.scrollPos = window.scrollY;
    });

    // all resize events
    window.addEventListener('resize', () => {
      this.renderer.resize(window.innerWidth, window.innerHeight);
      scaleSpriteToCanvas(this.background, this.renderer.view);
      this.setSpritePositions();
      this.storeSpritePositions();
    });
  }

  initPixiLoader() {
    const PIXI = this.pixi;
    const setup = this.canvasSetup;
    PIXI.loader
      .load(setup.bind(this));
  }

  animate() {
    if (this.bgDpSprite && this.layerDpSprite) {
      this.bgDpFilter.scale.x = this.settings.dispX ?
        this.settings.transition * this.settings.dispScale : 0;
      this.bgDpFilter.scale.y = this.settings.dispY ?
        this.settings.transition * (this.settings.dispScale + 10) : 0;

      // this.bgDpFilter.scale.x += 0.4


      // this.bgDpSprite.x = Math.sin(this.settings.count * 0.15) * 200;
      // this.bgDpSprite.y = Math.cos(this.settings.count * 0.13) * 200;

      this.bgDpSprite.x += 0.1;
      this.bgDpSprite.y += 0.4;

      this.layerDpSprite.x += 0.9;
      this.layerDpSprite.y += 1;
      // this.bgDpSprite.rotation = this.settings.count * 0.03;
      // this.layerRight.alpha = Math.round(Math.random(), Math.random());
      // this.settings.alpha += 0.05
    }

    if (this.settings.alpha >= 1) {
      setTimeout(() => {
        this.decrease = true;
      }, 1000);
    } else if (this.settings.alpha <= 0.76) {
      setTimeout(() => {
        this.decrease = false;
      }, 2000);
    }

    if (this.scrollPos) {
      if (this.scrollPos < 100) {
        this.layerAll.alpha = 1;
      } else {
        this.layerAll.alpha = (600 - this.scrollPos) / 600;
      }
    }

    if (this.decrease) {
      this.settings.alpha -= Math.random() * 0.003;
    } else {
      this.settings.alpha += Math.random() * 0.0025;
    }

    this.layerRight.alpha = this.settings.alpha;
    this.layerLeft.alpha = this.settings.alpha;

    if (this.mouseX) {
      this.moveSprites();
    }

    this.settings.count += 0.05 * this.settings.speed;

    this.renderer.render(this.stage);
    requestAnimationFrame(this.animate.bind(this));
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
