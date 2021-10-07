import axios from 'axios';

const getAllData = async () => {
    return axios.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json').then((response) => response.data).catch((error) => console.log(error));
}

export {
    getAllData
};
