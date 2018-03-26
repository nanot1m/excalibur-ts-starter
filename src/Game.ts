import * as ex from "excalibur";
import { Level1 } from "./Scenes/Level1";

export class Game extends ex.Engine {
  constructor() {
    super({ width: 800, height: 600, displayMode: ex.DisplayMode.FullScreen });
  }

  public start() {
    this.add("level1", new Level1());
    return super.start().then(() => {
      this.goToScene("level1");
    });
  }
}
