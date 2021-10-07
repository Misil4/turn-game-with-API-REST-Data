import {getVillainZarate, getRandomHero} from "./gameController.js";
import {initialize_hitPoints, initialize_Attack, turn} from './functions.js';
getVillainZarate().then((villainZarate) => {
    getRandomHero().then((superHero) => {
        let turn_counter = 0;
        villainZarate.powerstats.hitpoints = initialize_hitPoints(villainZarate);
        superHero.powerstats.hitpoints = (initialize_hitPoints(superHero));
        console.log("BIENVENIDO A PANIC CHALLENGE");
        while (villainZarate.powerstats.hitpoints > 1 || superHero.powerstats.hitpoints > 1) {
            if (villainZarate.powerstats.durability < 1 || villainZarate.powerstats.hitpoints < 1) {
                console.log(`el jugador ${
                    villainZarate.name
                } no puede continuar, partida finalizada\n Ganador ${
                    superHero.name
                }`);
                return;
            } else if (superHero.powerstats.durability < 1 || villainZarate.powerstats.hitpoints < 1) {
                console.log(`el jugador ${
                    superHero.name
                } no puede continuar, partida finalizada  Ganador ${
                    villainZarate.name
                }`);
                return;
            }
            turn_counter++;
            if (villainZarate.powerstats.speed + villainZarate.powerstats.intelligence > superHero.powerstats.speed + superHero.powerstats.speed) {
                if (turn(villainZarate, superHero, turn_counter)) {
                    let realAttack = initialize_Attack(villainZarate);
                    superHero.powerstats.hitpoints -= realAttack;
                    console.log(`${
                        villainZarate.name
                    } ha asestado ${realAttack} a ${
                        superHero.name
                    }\nVida restante ${
                        superHero.powerstats.hitpoints
                    }`);
                    villainZarate.powerstats.durability -= 1
                    if (superHero.powerstats.durability < 1) {
                        console.log(`El jugador ${
                            superHero.name
                        } no tiene mas durabilidad, partida finalizada
                        Ganador ${
                            villainZarate.name
                        }`);
                        return;
                    }
                }
                if (turn(superHero, villainZarate, turn_counter)) {
                    let realAttack = initialize_Attack(superHero);
                    villainZarate.powerstats.hitpoints -= realAttack;
                    console.log(`${
                        superHero.name
                    } ha asestado ${realAttack} a ${
                        villainZarate.name
                    }\nVida restante ${
                        villainZarate.powerstats.hitpoints
                    }`);
                    superHero.powerstats.durability -= 1
                    if (villainZarate.powerstats.durability < 1) {
                        console.log(`El jugador ${
                            villainZarate.name
                        } no tiene mas durabilidad, partida finalizada
Ganador ${
                            superHero.name
                        }`);
                        return;
                    }
                }
            } else {
                if (turn(superHero, villainZarate, turn_counter)) {
                    let realAttack = initialize_Attack(superHero);
                    villainZarate.powerstats.hitpoints -= realAttack;
                    console.log(`${
                        superHero.name
                    } ha asestado ${realAttack} a ${
                        villainZarate.name
                    }\nVida restante ${
                        villainZarate.powerstats.hitpoints
                    }`);
                    superHero.powerstats.durability -= 1
                    if (villainZarate.powerstats.durability < 1) {
                        console.log(`El jugador ${
                            villainZarate.name
                        } no tiene mas durabilidad, partida finalizada
                        Ganador ${
                            superHero.name
                        }`);
                        return;
                    }
                }
                if (turn(villainZarate, superHero, turn_counter)) {
                    let realAttack = initialize_Attack(villainZarate);
                    superHero.powerstats.hitpoints -= realAttack;
                    console.log(`${
                        villainZarate.name
                    } ha asestado ${realAttack} a ${
                        superHero.name
                    }\nVida restante ${
                        superHero.powerstats.hitpoints
                    }`);
                    villainZarate.powerstats.durability -= 1
                    if (superHero.powerstats.durability < 1) {
                        console.log(`El jugador ${
                            superHero.name
                        } no tiene mas durabilidad, partida finalizada
                        Ganador ${
                            villainZarate.name
                        }`);
                        return;
                    }
                }
            }
        }

    })
});





