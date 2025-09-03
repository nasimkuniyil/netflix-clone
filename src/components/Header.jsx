import { NavLink } from "react-router-dom";
import { useModal } from "../context/ModalProvider";
import Profile from "./Profile";

const Header = () => {

  const {openModal} = useModal();

  return (
    <div className="px-20 py-1 flex justify-between items-center fixed w-full bg-linear-to-b from-gray-950 from-10% to-transparent">
      <section className="flex flex-2 gap-50 items-center">
        <div className="h-15 overflow-hidden flex items-center">
          <img className="h-20" src="./netflix-text.png" alt="netflix_icon" />
        </div>
        <div className="nav-links flex gap-5 text-gray-300 text-sm">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/latest"}>Latest</NavLink>
          <NavLink to={"/tv-shows"}>TV Shows</NavLink>
          <NavLink to={"/movies"}>Movies</NavLink>
          <NavLink to={"/about"}>About</NavLink>
        </div>
      </section>
      <section className="flex-1 flex justify-end">
        <div className="group lg:hover:cursor-pointer" onClick={()=>openModal(<Profile/>)}>
          <img className="lg:group-hover:scale-95 duration-150 ease-in-out h-8" src="./user-icon.png" alt="user_profile" />
        </div>
      </section>
    </div>
  );
};

export default Header;
