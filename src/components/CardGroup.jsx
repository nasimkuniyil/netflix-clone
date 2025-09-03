import { useMovies } from "../context/MoviesProvider";
import MovieCard from "./MovieCard";

export default function CardGroup({isSmall}){

    const {movies} = useMovies();

    return (
        <div>
            <div className="flex gap-5 scrollbar-hide overflow-x-scroll ">
                {movies?.map((item, index)=>(<MovieCard key={index} imgUrl={item.backbackdrop_path} movie={item} isSmall={isSmall}/>))}
            </div>
        </div>
    )
}