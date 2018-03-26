import { Game } from "./Game";
import { Doggy } from "./Chars/Doggy";
import { Level1 } from "./Scenes/Level1";

const game = new Game();
const levelOne = new Level1();
const player = new Doggy(game.drawWidth / 2, game.drawHeight / 2);

levelOne.add(player);

game.add("levelOne", levelOne);

game.start().then(() => {
  game.goToScene("levelOne");
});
