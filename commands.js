import 'dotenv/config';
import { Game } from './game.js';
import { capitalize, InstallGlobalCommands, createSpiritChoices } from './utils.js';

// Get the game choices from game.js
// function createCommandChoices() {
//   const commandChoices = [];

//   for (let choice of choices) {
//     commandChoices.push({
//       name: capitalize(choice),
//       value: choice.toLowerCase(),
//     });
//   }

//   return commandChoices;
// }

// Command containing options
// const CHALLENGE_COMMAND = {
//   name: 'challenge',
//   description: 'Challenge to a match of rock paper scissors',
//   options: [
//     {
//       type: 3,
//       name: 'object',
//       description: 'Pick your object',
//       required: true,
//       choices: createCommandChoices(),
//     },
//   ],
//   type: 1,
// };

// Simple test command
const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
};

const CREATE_GAME = {
  name: 'create',
  description: 'Create a game of MOJI',
  type: 1,
};

const GET_ID = {
  name: 'getid',
  description: 'Get game ID',
  type: 1,
};

const JOIN_GAME = {
  name: 'joingame',
  description: 'Add a player to the game',
  type: 1,
}

const PICK_SPIRIT = {
  name: 'pickspirit',
  description: 'Allows a player to pick a spirit',
  options: [
    {
      type: 3,
      name: 'object',
      description: 'Pick your Spirit',
      required: true,
      choices: createSpiritChoices(),
    }
  ],
  type: 1,
}

const GET_TURN = {
  name: 'getturn',
  description: 'Get the current player whose turn it is',
  type: 1,
}

export const ALL_COMMANDS = [TEST_COMMAND, CREATE_GAME, GET_ID, JOIN_GAME, PICK_SPIRIT, GET_TURN];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
