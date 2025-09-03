import ContentShowcase from "../components/ContentShowcase";
import HeroBanner from "../components/HeroBanner";
import Modal from "../components/Modal";
import { useModal } from "../context/ModalProvider";
import MoviesProvider from "../context/MoviesProvider";

const Home = () => {
  const { isVisible, modalComponent } = useModal();
  return (
    <div>
      {isVisible && <Modal component={modalComponent} />}
      <MoviesProvider>
        <HeroBanner />
      </MoviesProvider>
      <MoviesProvider>
        <ContentShowcase title={"Action"} url={"/3/discover/movie?with_genres=28"}/>
      </MoviesProvider>
      <MoviesProvider>
        <ContentShowcase title={"Animation"} url={"/3/discover/movie?with_genres=16"}/>
      </MoviesProvider>
      <MoviesProvider>
        <ContentShowcase title={"Thriller"} url={"/3/discover/movie?with_genres=53"}/>
      </MoviesProvider>
      <MoviesProvider>
        <ContentShowcase title={"Comedy"} url={"/3/discover/movie?with_genres=35"}/>
      </MoviesProvider>
    </div>
  );
};

export default Home;
