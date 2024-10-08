import 'dotenv/config';
import express from 'express';
import {
  InteractionType,
  InteractionResponseType,
  verifyKeyMiddleware,
} from 'discord-interactions';
import { Game } from './game.js';
import { getRandomEmoji, statusEnum } from './utils.js';
import { noGameConfigured, gameNotStarted, gameAlreadyStarted, playerNotInGame, requestSuccess, requestFailure } from './universal-responses.js';

// Create an express app
const app = express();
// Get port, or default to 3000
const PORT = process.env.PORT || 3000;
let game;
let status = statusEnum.NOT_CREATED;

/**
 * Interactions endpoint URL where Discord will send HTTP requests
 * Parse request body and verifies incoming requests using discord-interactions package
 */
app.post('/interactions', verifyKeyMiddleware(process.env.PUBLIC_KEY), async function (req, res) {
  // Interaction type and data
  const { type, data } = req.body;

  if (type === InteractionType.APPLICATION_COMMAND) {
    console.log(`\nStarting Interaction`);
    try {
      console.log(`Current game Id: ${game.getGameId}`);
    } catch (error) {
      console.log(`GameId undefined\nstatus: ${status}`);
    }
    const { name } = data;
    // "test" command
    if (name === 'test') {
		// Send a message into the channel where command was triggered from
		return res.send({
			type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
			data: {
			// Fetches a random emoji to send from a helper function
			content: `hello ${req.body.member.user.username} ${getRandomEmoji()}`,
			},
		});
    }

    if (name === 'create') {
        game = new Game();
        status = statusEnum.CREATED;
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `created game: ${game.getGameId}`,
        },
      });
    }

    if (name === 'getid') {
      if (status !== statusEnum.NOT_CREATED) {
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: `current game: ${game.getGameId}`,
          },
        });
      } else {
        return res.send(noGameConfigured());
      }
    }

    if (name === 'joingame') {
      if (status !== statusEnum.NOT_CREATED) {
        var playerNumber = game.joinGame(req.body.member.user.username);
        if (playerNumber == -1) {
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content: `Player already in game`,
            },
          });
        } else {
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: `Player number ${playerNumber} has joined.`,
              },
            });
        }
      } else {
        return res.send(noGameConfigured());
      }
    }

    if (name === 'pickspirit') {
		let playerId = req.body.member.user.username;
		let spiritId = req.body.data.options[0].value.toUpperCase();
    	if (status === statusEnum.NOT_CREATED) {
			return res.send(noGameConfigured());
		} else if (status === statusEnum.STARTED) {
			return res.send(gameAlreadyStarted());
		} else if (game.didPlayerPickSpirit(playerId)) {
			console.log(`${game.didPlayerPickSpirit(playerId)}, ${playerId}, ${spiritId}`);
			return res.send(requestFailure("pickSpirit", `${playerId} already selected spirit: ${spiritId}`));
		} else {
			if (game.findPlayerInList(playerId) != null) {
				game.setPlayerSpirit(playerId, spiritId);
				return res.send(requestSuccess("pickSpirit"));
			} else {
			return res.send(playerNotInGame());
			}
		}
    }

    if (name === 'getturn') {
      if (status === statusEnum.STARTED) {
        return res.send({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
              content: `Its currently @${game.whoseTurn()} 's turn.\nIt will be your turn in {} players' actions.`,
            },
          });
      } else {
        if (status === status.NOT_CREATED) {
          return res.send(noGameConfigured());
        } else {
          return res.send(gameNotStarted());
        }
      }
    }

    console.error(`unknown command: ${name}`);
    return res.status(400).json({ error: 'unknown command' });
  }

  console.error('unknown interaction type', type);
  return res.status(400).json({ error: 'unknown interaction type' });
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
