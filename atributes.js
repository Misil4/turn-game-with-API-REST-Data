import { getRandomInt } from "./gameController.js";
const initialize_hitPoints = (object) => {
    let hitPoints = object.powerstats.strength * 5
    if (hitPoints < 300) {return hitPoints;}
    else {return 300};
}
const RandomFaces = (faces) => {
    return getRandomInt(1,faces);
}
const block_Attack = (object) => {
    let block = Math.floor((object.powerstats.speed+object.powerstats.combat)/2);
   return RandomFaces(100)<=block ? true : false
}
const initialize_Attack = (object) => {
    const weapon_Attack =(object.powerstats.power*object.powerstats.durability)/100;
    return (weapon_Attack+ object.powerstats.strength) * RandomFaces(20)/100;
}
export {initialize_hitPoints,RandomFaces,block_Attack,initialize_Attack}