import { Player } from './player.js';
import { v4 as uuidv4 } from 'uuid';
import { capitalize } from './utils.js';

export class Game {
    constructor() {
        this.gameId = uuidv4();
        this.turnCounter = 0;
        this.turnTimer = [];
        this.startTime = new Date();
        this.playerList = [];
        this.turnOrder = [];
        this.currentPlayer = 0;

        console.log(`Game ${this.gameId} started at ${this.startTime}`);
    }

    // Gets
    get getGameId() {
        return this.gameId;
    }
    get getTurnCounter() {
        return this.turnCounter;
    }
    get getTurnTimer() {
        return this.turnTimer;
    }
    get getStartTime() {
        return this.startTime;
    }
    get getPlayerList() {
        return this.playerList;
    }
    get getCurrentPlayer() {
        return this.currentPlayer;
    }

    // Sets

    // Functions
    increaseTurnCounter() {
        this.turnCounter = this.turnCounter + 1;
    }

    findPlayerInList(playerId) {
        for (let player of this.playerList) {
            if (player.getPlayerId === playerId) {
                return player;
            }
        }
        return null; // Return null if no player is found
    }

    joinGame(playerId) {
        let playerInGame = (this.findPlayerInList(playerId) != null) ? true : false;
        if (!playerInGame) {
            this.playerList.push(new Player(playerId, this.gameId));
            return this.playerList.length;
        } else {
            return -1;
        }
        
    }

    whoseTurn() {
        return this.playerList[this.currentPlayer];
    }

	setPlayerSpirit(playerId, spiritId) {
		this.playerList.find(player => player.playerId === playerId).selectSpirit(spiritId);
		setTimeout(() => {
			console.log(this.playerList.find(player => player.playerId === playerId));
		}, 500) // Wait for data to update.
	}

	didPlayerPickSpirit(playerId) {
		if (this.playerList.find(player => player.playerId === playerId).getSpiritSelected === "NONE") {
			console.log(`Picked spirit: ${this.playerList.find(player => player.playerId === playerId).getSpiritSelected}`);
			return false;
		} else {
			console.log(`Picked spirit: ${this.playerList.find(player => player.playerId === playerId).getSpiritSelected}`);
			return true;
		}
	}

    startGame() {

    }
}
