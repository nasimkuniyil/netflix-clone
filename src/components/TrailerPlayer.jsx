import axios from "axios";
import { useEffect, useState } from "react";
import API from "../utils/axios";

export default function TrailerPlayer({ movie }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.request({ url: `3/movie/${movie.id}/videos`, method: "GET" })
      .then((res) => setData(res.data.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="h-4/5 w-3/5 flex flex-col justify-center items-center">
      <div className="flex-1">
        <h1>{movie?.title || "Trailer Player"}</h1>
      </div>
      <div className="bg-gray-950/60 w-full flex-6 rounded-xl overflow-hidden">
        {console.log("videos : ", data?.key)}

        <iframe
          className="h-full w-full object-center"
          src={`https://www.youtube.com/embed/${data?.key}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  );
}
