import * as ex from "excalibur";
import { Doggy } from "../Chars/Doggy";

export class Level1 extends ex.Scene {
  public onActivate() {
    const width = this.engine.drawWidth;
    const height = this.engine.drawHeight;

    const player = new Doggy(width / 2, height / 2);

    this.engine.input.keyboard.on("hold", ev => {
      if (!ev) {
        return;
      }

      const ROTATE_SPEED = 1 / 12;
      const MOVE_SPEED = 4;
      switch (ev.key) {
        case ex.Input.Keys.Up:
          player.pos = player.pos.add(
            new ex.Vector(0, -1 * MOVE_SPEED).rotate(player.rotation)
          );
          break;
        case ex.Input.Keys.Right:
          player.rotation += ROTATE_SPEED;
          break;
        case ex.Input.Keys.Down:
          player.pos = player.pos.add(
            new ex.Vector(0, -1 * MOVE_SPEED).rotate(player.rotation)
          );
          break;
        case ex.Input.Keys.Left:
          player.rotation -= ROTATE_SPEED;
          break;
      }
    });

    this.add(player);
  }
}
