import {getAllData} from "./gameService.js"
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
const getVillainZarate = async () => {
    const data = await getAllData();
    return data[3];
}

const getRandomHero = async () => {
    const data = await getAllData()
    return data[getRandomInt(5,100)];
}

export {
    getVillainZarate,getRandomHero,getRandomInt
}
