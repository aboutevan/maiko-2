export const spritePaths = [
  '../../assets/img/m-base.png',
  // 'assets/img/m-fade.png',
  // 'assets/img/a-base.png',
  // 'assets/img/a-fade.png',
  // 'assets/img/i-base.png',
  // 'assets/img/i-fade.png',
  // 'assets/img/k-base.png',
  // 'assets/img/k-fade.png',
  // 'assets/img/o-base.png',
  // 'assets/img/o-fade.png',
  // 'assets/img/h-base.png',
  // 'assets/img/h-fade.png',
  // 'assets/img/c-base.png',
  // 'assets/img/c-fade.png',
  // 'assets/img/i-sm-base.png',
  // 'assets/img/i-sm-fade.png',
  // 'assets/img/b-base.png',
  // 'assets/img/b-fade.png',
  // 'assets/img/a-sm-base.png',
  // 'assets/img/a-sm-fade.png',
  // // japanese characters
  // 'assets/img/mai-base.png',
  // 'assets/img/mai-fade.png',
  // 'assets/img/ko-base.png',
  // 'assets/img/ko-fade.png',
  // 'assets/img/ch-base.png',
  // 'assets/img/ch-fade.png',
  // 'assets/img/ii-base.png',
  // 'assets/img/ii-fade.png',
  // 'assets/img/ba-base.png',
  // 'assets/img/ba-fade.png',
  // // background
  // // 'assets/img/darkness-2.jpg',
  // // 'assets/img/darkness-3.jpg',
  // // 'assets/img/darkness-4.jpg',
  // // 'assets/img/darkness-5.jpg',
  // // 'assets/img/darkness-6.jpg',
  // // 'assets/img/darkness-7.jpg',
  // // 'assets/img/darkness-8.jpg',
  // // 'assets/img/darkness-9.png',
  // 'assets/img/darkness-10.jpg',
  // // displacement
  // 'assets/img/displacement.png',
  // // 'assets/img/displacement-2.jpg',
  // // 'assets/img/displacement-3.png',
  // // 'assets/img/displacement-4.jpg',
  // 'assets/img/displacement-5.jpg',
  // // 'assets/img/displacement-7.png',
];


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
