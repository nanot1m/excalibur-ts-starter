import { Engine, DisplayMode } from "excalibur";

export class Game extends Engine {
  constructor() {
    super({
      width: 800,
      height: 600,
      displayMode: DisplayMode.FullScreen
    });
  }
}
