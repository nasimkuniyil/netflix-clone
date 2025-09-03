import { useEffect } from "react";
import { useModal } from "../context/ModalProvider";
import Button from "./Button";
import Profile from "./Profile";
import TrailerPlayer from "./TrailerPlayer";

export default function Modal({component}){
    const {closeModal} = useModal();

    useEffect(()=>{
        document.body.style.overflow = "hidden";
        return ()=>document.body.style.overflow = "auto"
    },[])

    return (
        <div className="absolute z-10 inset-0 h-full w-full bg-gray-800/20 backdrop-blur-lg text-white animate-ping-once">
            <div className="h-full w-full flex flex-col items-center justify-center gap-5 animate-popup">
                {component}
                <Button text={"close modal"} handleClick={closeModal}/>
            </div>
        </div>
    )
}