import {
	InteractionType,
	InteractionResponseType,
	verifyKeyMiddleware,
} from 'discord-interactions';

export function noGameConfigured() {
    return {
		type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
		data: {
			content: `No game configured, please use \`/Create\``,
		},
    };
}
  
export function gameNotStarted() {
    return {
		type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
		data: {
			content: `Game not started yet, use \`/Startgame\` if you're ready to play`,
		},
    };
}
  
export function gameAlreadyStarted() {
    return {
		type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
		data: {
			content: `Game already started. Wait for current game to finish or use \`/ForceEndGame\` to cancel the current game`,
		},
    };
}
  
export function playerNotInGame() {
    return {
		type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
		data: {
			content: `Player not in game, please try using \`/Joingame\``,
		},
    };
}

export function requestSuccess(requestType) {
    return {
		type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
		data: {
			content: `Request ${requestType} was successful.`,
		},
    };
}

export function requestFailure(requestType, reason) {
    return {
		type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
		data: {
			content: `Request ${requestType} was not successful. Because ${reason}.`,
		},
    };
}
