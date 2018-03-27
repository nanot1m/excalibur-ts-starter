import * as ex from "excalibur";

export class Game extends ex.Engine {
  constructor() {
    super({
      width: 800,
      height: 600,
      displayMode: ex.DisplayMode.FullScreen
    });
  }
}
