import { Game } from "./Game";
import { Doggy } from "./Chars/Doggy";
import { Level1 } from "./Scenes/Level1";
import { DudeNude } from "./Chars/DudeNude";
import { Loader } from "excalibur";

const game = new Game();
const levelOne = new Level1();
const player = new Doggy(game.drawWidth / 2, game.drawHeight / 2 + 80);

const dudeNude = new DudeNude(game.drawWidth / 2, game.drawHeight / 2 - 80);

const loader = new Loader();
loader.addResource(DudeNude.texture);

levelOne.add(dudeNude);
levelOne.add(player);

game.add("levelOne", levelOne);

game.start(loader).then(() => {
  game.goToScene("levelOne");
});
