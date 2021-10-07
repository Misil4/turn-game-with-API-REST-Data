import {getVillainZarate, getRandomHero} from "./gameController.js";
import {initialize_hitPoints, RandomFaces, block_Attack, initialize_Attack} from './atributes.js';
getVillainZarate().then((villainZarate) => {
    getRandomHero().then((superHero) => {
        let turn = 0;
        villainZarate.powerstats.hitpoints = initialize_hitPoints(villainZarate);
        superHero.powerstats.hitpoints = (initialize_hitPoints(superHero));
        console.log("BIENVENIDO A PANIC CHALLENGE");
        while (villainZarate.powerstats.hitpoints > 1 || superHero.powerstats.hitpoints > 1) {
            turn++;
        
        }
    })
});

