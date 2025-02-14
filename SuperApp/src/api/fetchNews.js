import axios from 'axios';

const Base_URL = "https://newsapi.org/v2/top-headlines"
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

const fetchNewsApi = async ()=>{
    try {
        const {data} = await axios.get(Base_URL, {
            params: {
                apiKey : API_KEY,
                sources : "techcrunch"
            }
        })
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default fetchNewsApi