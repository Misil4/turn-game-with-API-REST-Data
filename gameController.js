import {getAllData} from "./gameService.js"
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
const getVillainZarate = async () => {
    const data = await getAllData();
    return data.filter((element) => element.id ===4);
}

const getRandomHero = async () => {
    const data = await getAllData()
    return data[getRandomInt(5,100)];
}

export {
    getVillainZarate,getRandomHero
}
