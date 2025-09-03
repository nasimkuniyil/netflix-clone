import { createContext, useContext, useState } from "react";
import API from "../utils/axios";

const MovieContext = createContext();

export const useMovies = () => {
  return useContext(MovieContext);
};

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const getMovies = (url) => {
    const options = {
      method: "GET",
      url:url,
      params: {
        include_adult: "false",
        include_video: "false",
        language: "en-US",
        page: "1",
        sort_by: "popularity.desc",
      },
    };

    API.request(options)
      .then((res) => {
        console.log(res.data.results)
        setMovies(res.data.results);
      })
      .catch((err) => console.log("fetch movie provider error : ", err));
  };

  const value = {
    movies,
    getMovies,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export default MoviesProvider;
