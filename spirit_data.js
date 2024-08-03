export const EXAMPLE = {
    stats:{
        presence:0,
        health:0,
        speed:0,
        luck:0,
        knowledge:0,
        initiative:0,
        inventory:1,
        strike:1
    },
    passiveAbility:"",
    activeAbility:"",
}

export const LUJI = {
    stats:{
        presence:5,
        health:4,
        speed:2,
        luck:3,
        knowledge:4,
        initiative:6,
        inventory:1,
        strike:1
    },
    passiveAbility:"He does not need to reveal himself when he fails to Scout or Venture a Rift Room. When another spirit reveals themself in a Poles of Will room, Luji gets one +1 to Health.",
    activeAbility:"May spotlight both of the Poles of Will rooms.",
}

export const SHUJA = {
    stats:{
        presence:3,
        health:2,
        speed:2,
        luck:6,
        knowledge:4,
        initiative:5,
        inventory:1,
        strike:1
    },
    passiveAbility:"When Shuja successfully loots, he may choose to reroll which item he gets within the tier once per successful loot.",
    activeAbility:"May double all his luck die before rolling on his next turn.",
}

export const TYHOLI = {
    stats:{
        presence:4,
        health:2,
        speed:3,
        luck:3,
        knowledge:3,
        initiative:9,
        inventory:1,
        strike:1
    },
    passiveAbility:"Whenever Tyholi kills another spirit he may add one point to any statistic.",
    activeAbility:"May strike in an adjacent room.",
}

export const PHAROS = {
    stats:{
        presence:4,
        health:2,
        speed:2,
        luck:6,
        knowledge:5,
        initiative:5,
        inventory:1,
        strike:1
    },
    passiveAbility:"May choose to remain dead even after fully recovered. For every turn spent dead after fully recovered Pharos gains a +1 in either Luck or Presence.",
    activeAbility:"He may take 1 statistic point from another player that occupies the same space and add it to any one of his own. The targeted player may choose which stat they lose a point in. A player may not lose a point in a statistic if the value is '1'. If a player cannot lose any more points, they do not have to lose a point and Pharos will still receive his point. Pharos may not add to presence, nor can a targeted player subtract from their presence.",
}

export const GIZA = {
    stats:{
        presence:7,
        health:2,
        speed:2,
        luck:2,
        knowledge:3,
        initiative:8,
        inventory:1,
        strike:1
    },
    passiveAbility:"When killed, he may choose to lose one additional presence, to instead live at maximum health.",
    activeAbility:"May strike and/or sabotage a Seas of Swift room from anywhere in the arena.",
}

export const ULAZA = {
    stats:{
        presence:4,
        health:4,
        speed:2,
        luck:4,
        knowledge:4,
        initiative:6,
        inventory:1,
        strike:1
    },
    passiveAbility:"Can continue to make move, sabotage, and spotlight actions even while recovering. She will return to the arena in the last spot she occupied when alive.",
    activeAbility:"She may pick a dead spirit that still has presence left, that spirit must reveal where they return to the arena to her.",
}

export const MGANGA = {
    stats:{
        presence:5,
        health:2,
        speed:2,
        luck:3,
        knowledge:6,
        initiative:5,
        inventory:1,
        strike:1
    },
    passiveAbility:"He does not need to reveal himself for failing to explore the Trees. The threshold for revealing himself when failing to loot is instead 10 or lower.",
    activeAbility:"Can sabotage opposing Rift Rooms with one objective action.",
}

export const FUVU = {
    stats:{
        presence:4,
        health:2,
        speed:2,
        luck:3,
        knowledge:7,
        initiative:6,
        inventory:1,
        strike:1
    },
    passiveAbility:"May choose to release an item to the void after the loot action, and choose to not take the item.",
    activeAbility:"May place one 'Helms Shield' trap at either Tree of Wisdom room from any other room in the arena, once per life.",
}

export const MAJIRA = {
    stats:{
        presence:5,
        health:4,
        speed:2,
        luck:3,
        knowledge:3,
        initiative:7,
        inventory:1,
        strike:1
    },
    passiveAbility:"She cannot be trapped in a Rift Room. When her presence is a 2 or lower she may use any item benefiting the Health statistic regardless of her current knowledge.",
    activeAbility:"Can add her luck die result to her next movement.",
}

export const KALELO = {
    stats:{
        presence:4,
        health:2,
        speed:3,
        luck:3,
        knowledge:5,
        initiative:6,
        inventory:1,
        strike:1
    },
    passiveAbility:"When Kalelo successfully loots or explores, he may add the value of the tier of the item, or the amount of points obtained from exploration to the speed of his next move action. He may enter the arena at The Seas.",
    activeAbility:"May sabotage and restore the Cellar. If Kalelo is killed while the Cellar is sabotaged, it is automatically restored.",
}

export const YESANTI = {
    stats:{
        presence:5,
        health:3,
        speed:2,
        luck:6,
        knowledge:2,
        initiative:6,
        inventory:1,
        strike:1
    },
    passiveAbility:"Once per life, he may absorb damage equal to his luck die result. This absorbed damage is stored for his ability. If he is killed before using his stored damage, that stored damage is lost.",
    activeAbility:"He may release his stored absorbed damage in a strike.",
}

export const AMANZI = {
    stats:{
        presence:5,
        health:3,
        speed:3,
        luck:4,
        knowledge:3,
        initiative:6,
        inventory:1,
        strike:1
    },
    passiveAbility:"Can choose not to reveal themself once per turn.",
    activeAbility:"May restore a Sea of Swift room from any room in the arena, and/or sabotage any Sea of Swift room for the cost of only one action.",
}

export const BARAFU = {
    stats:{
        presence:4,
        health:3,
        speed:2,
        luck:4,
        knowledge:5,
        initiative:6,
        inventory:1,
        strike:1
    },
    passiveAbility:"Barafu may move between, and enter the arena at the Poles of Will.",
    activeAbility:"May learn the location of the spirit who last struck him.",
}

export const NKOSAZANA = {
    stats:{
        presence:4,
        health:2,
        speed:2,
        luck:6,
        knowledge:4,
        initiative:6,
        inventory:1,
        strike:1
    },
    passiveAbility:"Nkosazana may use the portals, without the portal key.",
    activeAbility:"A move action where Nkosazana may use a point of speed to instead move to an Arena Entrance from any room.",
}

export const GELOS = {
    stats:{
        presence:4,
        health:2,
        speed:2,
        luck:4,
        knowledge:6,
        initiative:6,
        inventory:1,
        strike:1
    },
    passiveAbility:"Every two turns consecutively spent not striking, she takes a +1 of Knowledge.",
    activeAbility:"Can heal herself for 1 point up to the amount of her knowledge statistic.",
}

export const NECRODAMA = {
    stats:{
        presence:5,
        health:2,
        speed:2,
        luck:3,
        knowledge:6,
        initiative:6,
        inventory:1,
        strike:1
    },
    passiveAbility:"When Necrodama kills another player, he may choose to add the value of his knowledge statistic to the recovery time of that player. If he does not, he takes +1 point in Knowledge.",
    activeAbility:"Necrodama can return another dead spirit that has presence left to the arena on their next turn. If he does, he takes +2 points in Knowledge. Necrodama cannot use this ability on a spirit affected by his passive ability.",
}
