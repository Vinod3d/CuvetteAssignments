import axios from 'axios';

const Base_URL = "http://api.weatherapi.com/v1"
const API_KEY = import.meta.env.VITE_APP_WEATHER_API_KEY

const fetchWeatherApi = async (city="Raigarh")=>{
    try {
        const {data} = await axios.get(`${Base_URL}/current.json`, {
            params: {
                key : API_KEY,
                q : city
            }
        })
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default fetchWeatherApi