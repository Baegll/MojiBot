import { emptyStats } from './utils.js';

// create new statblock
function addStats(stats, addedStats) {
    var newStats = emptyStats;
    newStats.presence = stats.presence + addedStats.presence;
    newStats.health = stats.health + addedStats.health;
    newStats.speed = stats.speed + addedStats.speed;
    newStats.luck = stats.luck + addedStats.luck;
    newStats.knowledge = stats.knowledge + addedStats.knowledge;
    newStats.initiative = stats.initiative + addedStats.initiative;
    newStats.inventory = stats.inventory + addedStats.inventory;
    newStats.strike = stats.strike + addedStats.strike;

    return newStats;
}

export class Player {
    constructor(playerId, gameId) {
        // Metadata
        this.playerId = playerId;
        this.gameId = gameId;
        this.spiritSelected = 0;
        this.timeTaken = 0;
        // Character Info:
        this.baseStats = emptyStats
        this.explorationStats = emptyStats
        this.restorationStats = emptyStats
        this.itemStats = emptyStats
        this.adminFix = emptyStats
        this.damage = 0
        this.passiveAbility = ""
        this.activeAbility = ""
        this.items = {}
        this.calling = {}
        this.completedCallings = []
        this.actions = 0
        this.riftPoints = 0
        
        console.log(`${this.playerId} created for game ${this.gameId}`)
    }

    // Gets
    get getPlayerId() {
        console.log(this.playerId);
        return this.playerId;
    }
    get getStats() {
        var stats = emptyStats;
        stats = addStats(stats, this.baseStats);
        stats = addStats(stats, this.explorationStats);
        stats = addStats(stats, this.restorationStats);
        stats = addStats(stats, this.itemStats);
        stats = addStats(stats, this.adminFix);
        stats = stats.health - this.damage;

        return stats;
    }
    get getPresence() {
        var statBlock = this.getStats();
        return statBlock.presence;
    }
    get getHealth() {
        var statBlock = this.getStats();
        return statBlock.health;
    }
    get getSpeed() {
        var statBlock = this.getStats();
        return statBlock.speed;
    }
    get getLuck() {
        var statBlock = this.getStats();
        return statBlock.luck;
    }
    get getKnowledge() {
        var statBlock = this.getStats();
        return statBlock.knowledge;
    }
    get getInitiative() {
        var statBlock = this.getStats();
        return statBlock.initiative;
    }
    get getInventory() {
        var statBlock = this.getStats();
        return statBlock.inventory;
    }
    get getStrike() {
        var statBlock = this.getStats();
        return statBlock.strike;
    }
    get getSpiritInfo() {
        console.log(this.getStats());
        console.log(this.passiveAbility);
        console.log(this.activeAbility);
        console.log(this.items);
        console.log(this.calling);
        console.log(this.completedCallings);
        console.log(this.actions);
        console.log(this.riftPoints);

        return {
            stats:this.getStats(),
            passiveAbility:this.passiveAbility,
            activeAbility:this.activeAbility,
            items:this.items,
            calling:this.calling,
            completedCallings:this.completedCallings,
            actions:this.actions,
            riftPoints:this.riftPoints
        };
    }

    // Sets
    selectSpirit(spiritId) {
        if (this.spiritSelected == 0) {
            this.baseStats = spiritId.stats;
            this.passiveAbility = spiritId.passiveAbility;
            this.activeAbility = spiritId.activeAbility;
        }
    }

    // Functions
    adjustStat(statId, amount, reason) {
        if (reason = "EXPLORATION") {
            this.explorationStats.statId = this.explorationStats.statId + amount;
        } else if (reason = "RESTORATION") {
            this.restorationStats.statId = this.restorationStats.statId + amount;
        } else if (reason = "ADMINFIX") {
            this.adminFix.statId = this.adminFix.statId + amount;
        } else if (reason = "DAMAGE") {
            if (statId != health) {
                // Do nothing
            } else {
                this.damage = this.damage + amount;
            }
        }
    }
}
