export function spritePaths() {
  const context = require.context('img/', true, /\.(png|jpg)$/); // img set in webpack alias
  const lettersObj = {};

  context.keys().forEach((key) => {
    const newObjKey = key.replace(/\.(png|jpg)/g, '').replace(/[./\-_]/g, '');
    lettersObj[newObjKey] = context(key);
  });

  return lettersObj;
}

// export const spritePaths = [
//  lettersObj.mbase,
//  lettersObj.mfade,
//  lettersObj.abase,
//  lettersObj.afade,
//  lettersObj.ibase,
//  lettersObj.ifade,
//  lettersObj.kbase,
//  lettersObj.kfade,
//  lettersObj.obase,
//  lettersObj.ofade,
//  lettersObj.hbase,
//  lettersObj.hfade,
//  lettersObj.cbase,
//  lettersObj.cfade,
//  lettersObj.ismbase,
//  lettersObj.ismfade,
//  lettersObj.bbase,
//  lettersObj.bfade,
//  lettersObj.asmbase,
//  lettersObj.asmfade,
//   // japanese characters
//  lettersObj.maibase,
//  lettersObj.maifade,
//  lettersObj.kobase,
//  lettersObj.kofade,
//  lettersObj.chbase,
//  lettersObj.chfade,
//  lettersObj.iibase,
//  lettersObj.iifade,
//  lettersObj.babase,
//  lettersObj.bafade,
//   // background
//   //lettersObj.darkness2,
//   //lettersObj.darkness3,
//   //lettersObj.darkness4,
//   //lettersObj.darkness5,
//   //lettersObj.darkness6,
//   //lettersObj.darkness7,
//   //lettersObj.darkness8,
//   //lettersObj.darkness9,
//  lettersObj.darkness10,
//   // displacement
//  lettersObj.displacement,
//   //lettersObj.displacement2,
//   //lettersObj.displacement3,
//   //lettersObj.displacement4,
//  lettersObj.displacement5,
//   // 'displacement-7,
// ];

export function scaleSpriteToCanvas(spr, canvas) {
  const sprite = spr;
  const ratio = sprite.width / sprite.height;

  sprite.x = -(canvas.width * 0.10);

  if (canvas.width < canvas.height) {
    sprite.height = canvas.height * 1.20;
    sprite.width = ratio * sprite.height;
  } else {
    sprite.width = canvas.width * 1.20;
    sprite.height = sprite.width / ratio;

    if (sprite.height < canvas.height) {
      sprite.height = canvas.height * 1.20;
      sprite.width = ratio * sprite.height;
    }
  }
}

export function positionSprite(source, x = 0, y = 0, scale) {
  source.map((sprite, i) => {
    const spr = sprite;
    spr.x = x + i;
    spr.y = y + i;

    if (scale) {
      spr.scale.x = scale;
      spr.scale.y = scale;
    }
    return spr;
  });
}

export function spriteOnMouseMove(parentContainer, arrIndex, reverse, obj) {
  const sprites = [parentContainer[arrIndex[0]], parentContainer[arrIndex[1]]];
  const spritesWidth = sprites[0].width + sprites[1].width;
  // const spritesHeight = sprites[0].height + sprites[1].height;
  const options = {
    x: reverse ? 1.1 : 0.9,
    y: reverse ? 1.1 : 0.9,
    mouseRatio: spritesWidth * 0.0006,
    frameRatio: 0.05,
  };
  if (obj) {
    if (typeof obj.x !== 'undefined') {
      options.x = obj.x;
    }
    if (typeof obj.y !== 'undefined') {
      options.y = obj.y;
    }
    if (typeof obj.mouseRatio !== 'undefined') {
      options.mouseRatio = spritesWidth * obj.mouseRatio;
    }
    if (typeof obj.frameRatio !== 'undefined') {
      options.frameRatio = obj.frameRatio;
    }
  }

  if (reverse) {
    sprites.map((spr, i) => {
      const sprite = spr;
      sprite.x +=
        (
          (this.orgSpritePosLeft[arrIndex[i]].x * options.x) +
          ((-(this.mouseX) * options.mouseRatio) - sprite.x)
        ) * options.frameRatio;

      sprite.y +=
        (
          (this.orgSpritePosLeft[arrIndex[i]].y * options.y) +
          ((-(this.mouseY) * options.mouseRatio) - sprite.y)
        ) * options.frameRatio;
      return sprite;
    });
  } else {
    sprites.map((spr, i) => {
      const sprite = spr;
      sprite.x +=
        (
          (this.orgSpritePosRight[arrIndex[i]].x * options.x) +
          ((this.mouseX * options.mouseRatio) - sprite.x)
        ) * options.frameRatio;
      sprite.y +=
      (
        (this.orgSpritePosRight[arrIndex[i]].y * options.y) +
        ((this.mouseY * options.mouseRatio) - sprite.y)
      ) * options.frameRatio;
      return sprite;
    });
  }
}
