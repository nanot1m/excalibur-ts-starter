import * as ex from "excalibur";

const width = 40;
const height = 40;

export class Doggy extends ex.Actor {
  constructor(x: number, y: number) {
    super(x - width / 2, y - height / 2, width, height, ex.Color.Cyan);
  }

  public draw(ctx: CanvasRenderingContext2D, delta: number) {
    ctx.save();
    ctx.translate(this.pos.x - width / 2, this.pos.y - height / 2);
    ctx.rotate(this.rotation);

    this._drawBody(ctx);
    this._drawEars(ctx);
    this._drawEyes(ctx);
    this._drawTail(ctx);

    ctx.restore();
  }

  private _drawTail(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = ex.Color.Black.toString();
    ctx.beginPath();
    ctx.arc(0, height * 9 / 16, width / 6, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
  }

  private _drawEyes(ctx: CanvasRenderingContext2D) {
    this._drawEye(width / 8, -height * 5 / 8, ctx);
    this._drawEye(-width * 3 / 8, -height * 5 / 8, ctx);
  }

  private _drawEye(x: number, y: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = ex.Color.White.toString();
    ctx.beginPath();
    ctx.rect(x, y, width / 4, height / 4);
    ctx.closePath();
    ctx.fill();
  }

  private _drawEars(ctx: CanvasRenderingContext2D) {
    this._drawEar(width / 4, -height * 5 / 16, ctx);
    this._drawEar(-width * 3 / 4, -height * 5 / 16, ctx);
  }

  private _drawEar(x: number, y: number, ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = ex.Color.Black.toString();
    ctx.beginPath();
    ctx.rect(x, y, width / 2, height / 2);
    ctx.closePath();
    ctx.fill();
  }

  private _drawBody(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color.toString();
    ctx.beginPath();
    ctx.rect(-width / 2, -height / 2, width, height);
    ctx.closePath();
    ctx.fill();
  }
}
