import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'c7092dfa4f436937e637439892f6d86f';

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
       params: {
           q: query,
           units: 'metric',
           appid: API_KEY,
       }
    });
    return data;
}