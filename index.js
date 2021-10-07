import {getVillainZarate, getRandomHero} from "./gameController.js";
import {initialize_hitPoints, RandomFaces, block_Attack, initialize_Attack,turn} from './atributes.js';
getVillainZarate().then((villainZarate) => {
    getRandomHero().then((superHero) => {
        let turn_counter = 0;
        let dice = 0;
        villainZarate.powerstats.hitpoints = initialize_hitPoints(villainZarate);
        superHero.powerstats.hitpoints = (initialize_hitPoints(superHero));
        console.log("BIENVENIDO A PANIC CHALLENGE");
       // while (villainZarate.powerstats.hitpoints > 1 || superHero.powerstats.hitpoints > 1) {
            turn_counter++;
            if (villainZarate.powerstats.speed + villainZarate.powerstats.intelligence > superHero.powerstats.speed + superHero.powerstats.speed) {
                    if (turn(villainZarate,superHero,turn_counter)) {
                        let realAttack = initialize_Attack(villainZarate);
                        superHero.powerstats.hitpoints-=realAttack;
                        console.log(`${villainZarate.name} ha asestado ${realAttack} a ${superHero.name}\nVida restante ${superHero.powerstats.hitpoints}`);
                        superHero.powerstats.durability-=1
                        if (adversary.powerstats.durability < 1) {
                            console.log(`El jugador ${
                                superHero.name
                            } no tiene mas durabilidad, partida finalizada`);
                            return;
                        }
                    }
            }
        
    })
});


