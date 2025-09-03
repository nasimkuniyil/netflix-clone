import { createContext, useContext, useState } from "react"

const ModalContext = createContext();

export const useModal = ()=> useContext(ModalContext);

export default function ModalProvider({children}){
    
    const [isVisible, setVisibility] = useState(false);
    const [modalComponent, setModalComponent] = useState(null);

    const openModal = (modalContent)=>{
        setVisibility(true);
        setModalComponent(modalContent);
    };
    const closeModal = ()=> setVisibility(false);
    
    return (
        <ModalContext.Provider value={{isVisible, openModal, closeModal, modalComponent}}>
            {children}
        </ModalContext.Provider>
    )
}