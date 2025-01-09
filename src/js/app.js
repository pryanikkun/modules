import Game,
{
    GameSavingData as saveGame,
    writeGameSaving as writeGame,
    readGameSaving as loadGame
} from './game.js';
console.log('app worked')

const game = new Game();
game.start();