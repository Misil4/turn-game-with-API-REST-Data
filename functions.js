import {getRandomInt} from "./gameController.js";
const initialize_hitPoints = (object) => {
    let hitPoints = object.powerstats.strength * 5
    if (hitPoints < 300) {
        return hitPoints;
    } else {
        return 300
    };
}
const RandomFaces = (faces) => {
    return getRandomInt(1, faces);
}
const block_Attack = (object) => {
    let block = Math.floor((object.powerstats.speed + object.powerstats.combat) / 2);
    let isBlocking = false;
    return RandomFaces(100) <= block ? isBlocking = true : isBlocking = false;
}
const initialize_Attack = (object) => {
    const weapon_Attack = (object.powerstats.power * object.powerstats.durability) / 100;
    return Math.floor((weapon_Attack + object.powerstats.strength) * RandomFaces(20) / 100);
}
const turn = (object, adversary, turn) => {
    console.log(`Turno ${turn}\nturno de ${
        object.name
    }`);
    console.log()
    let dice = RandomFaces(100);
    console.log(`Se lanza un dado de 100 caras y sale ${dice}`);
    if (dice <= object.powerstats.combat) {
        if (block_Attack(object)) {
            console.log(`ATAQUE BLOQUEADO\ndurabilidad de ${
                adversary.name
            } restante : ${
                adversary.powerstats.durability
            }\n`)
            adversary.powerstats.durability = adversary.powerstats.durability - 3;
        } else 
            return true

        

    } else 
        console.log("ATAQUE FALLADO");
    
}

export {
    initialize_hitPoints,
    RandomFaces,
    block_Attack,
    initialize_Attack,
    turn
}


