import axios from "axios";

const API = axios.create({
    baseURL:"https://api.themoviedb.org/",
    headers : {
        accept: "application/json",
        Authorization: import.meta.env.VITE_TMDB_API_KEY
    }
})

export default API;