import axios from 'axios';

const getAllData = async () =>  {
    return axios.get('https://akabab.github.io/superhero-api/api/')
    .then((response) => response.data)
    .catch((error) => console.log(error));
}

export {getAllData};