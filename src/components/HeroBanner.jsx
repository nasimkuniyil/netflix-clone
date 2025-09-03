import { useEffect, useState } from "react";
import { useMovies } from "../context/MoviesProvider";
import Button from "./Button";
import ContentShowcase from "./ContentShowcase";

export default function HeroBanner() {
  const { movies } = useMovies();
  const [mainMovie, setMainMovie] = useState([]);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    console.log("random number : ", Math.floor(Math.random() * (20 - 1)) + 1);
    setMainMovie(movies[Math.floor(Math.random() * (20 - 1)) + 1]);
    setChanged(!changed);
  }, [movies]);

  useEffect(() => {
    console.log("hello : ", mainMovie);
  }, [changed]);

  return (
    <div
      id="home"
      className="h-dvh bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1920/${mainMovie?.backdrop_path})`,
      }}
    >
      <div className="h-full flex flex-col justify-around px-24 bg-linear-to-t from-gray-950 via-gray-900/20 via-70% to-gray-950 text-white">
        <section className="pt-40">
          <div className="pb-5">
            <h1>{mainMovie?.title || "Movie Title"}</h1>
          </div>
          <div>
            <p className="w-lg pb-5 font-light">
              {mainMovie?.overview ||
                `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores,iusto, adipisci aut nemo commodi iste ea minus deserunt ab hic ipsa, amet porro vitae quisquam! Autem dicta facere iste totam!`}
            </p>
          </div>
          <div className="flex gap-5">
            <Button text={"Play"} btnStyle={"bg-gray-300 text-gray-800"} />
            <Button text={"More info"} />
          </div>
        </section>
        <section>
          <div>
            <ContentShowcase
              title={"Netflix Originals"}
              url={"/3/discover/movie"}
              isSmall={true}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
