import * as ex from "excalibur";
import { Doggy } from "../Chars/Doggy";

export class Level1 extends ex.Scene {
  public onActivate() {
    const width = this.engine.drawWidth;
    const height = this.engine.drawHeight;
    const player = new Doggy(width / 2, height / 2);
    this.add(player);
  }
}
