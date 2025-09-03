import { useEffect, useState } from "react";
import CardGroup from "./CardGroup";
import { useMovies } from "../context/MoviesProvider";

export default function ContentShowcase({ title, url, isSmall }) {
  
    const {getMovies} = useMovies();

    useEffect(()=>{
        getMovies(url);
    },[])

  return (
    <div
      id={title.toLowerCase()}
      className={`h-fit text-white mt-3 pt-10 pb-2 ${!isSmall && "px-24"}`}
    >
      <div>
        <h2 className="pb-3">| {title || "Group title"}</h2>
      </div>
      <div className="flex flex-col gap-10">
        <CardGroup title={"Trending"} isSmall={isSmall}/>
      </div>
    </div>
  );
}
