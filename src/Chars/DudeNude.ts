import { Actor, Engine, SpriteSheet, Texture } from "excalibur";

const width = 64;
const height = 64;

const SpriteInfo = {
  cols: 13,
  rows: 21,
  path: "/assets/sprites/dude_nude.png"
};

export class DudeNude extends Actor {
  public static texture = new Texture(SpriteInfo.path);

  constructor(x: number, y: number) {
    super(x, y, width, height);
  }

  public onInitialize(engine: Engine) {
    const spriteSheet = new SpriteSheet({
      columns: SpriteInfo.cols,
      rows: SpriteInfo.rows,
      spHeight: height,
      spWidth: width,
      image: DudeNude.texture
    });

    const castAnimation = spriteSheet.getAnimationBetween(
      engine,
      SpriteInfo.cols * 2,
      SpriteInfo.cols * 2 + 6,
      100
    );

    this.addDrawing("cast", castAnimation);
    this.setDrawing("cast");
  }
}
