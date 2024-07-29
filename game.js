import { Player } from './player.js';
import { v4 as uuidv4 } from 'uuid';
import { capitalize } from './utils.js';

export class Game {
    constructor() {
        this.gameId = uuidv4();
        this.turnCounter = 0;
        this.turnTimer = [];
        this.startTime = new Date();
        this.playerList = {};
        this.currentPlayer = null;

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
    increaseTurnCounter() {
        this.turnCounter = this.turnCounter + 1;
    }

    // Functions
    joinGame(playerId) {
        this.playerList[playerId] = new Player(playerId, this.gameId);
    }
    
    startGame() {

    }
}
