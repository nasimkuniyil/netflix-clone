import { useEffect, useState } from "react";
import { useModal } from "../context/ModalProvider"
import TrailerPlayer from "./TrailerPlayer";
import API from "../utils/axios";

export default function MovieCard({isSmall, movie}){
    // const imgUrl = "https://static1.moviewebimages.com/wordpress/wp-content/uploads/photo/Jzf8rVaXzvbX2Z8EhTrvSnTanu6oXc.jpg"

    const [bgImage, setBgImage] = useState("");

    const {openModal}= useModal();

    useEffect(()=>{
        API.request({method : "GET", url:`https://api.themoviedb.org/3/movie/${movie.id}/images`})
        .then(res => setBgImage(res.data.backdrops[0].file_path))
        .catch(er => console.log(er))
    })

    function handleClick(){
        openModal(<TrailerPlayer movie={movie}/>)
        window.scrollTo({
            top:0,
            left:0,
            behavior:'instant'
        })
    }

    return(
        <div className="group py-4 lg:hover:cursor-pointer lg:hover:opacity-75 duration-150" onClick={handleClick}>
            <div className={`${isSmall ? "h-44 w-80" : "h-60 w-90"}`}>
                <img className="lg:group-hover:scale-95 duration-150 h-full w-full object-cover rounded-xl" src={`https://image.tmdb.org/t/p/w500/${bgImage}`} alt="" />
            </div>
        </div>
    )
}