import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ModalProvider from "../context/ModalProvider";
import { useAuth } from "../context/AuthProvider";

const Layout = () => {
  const { userLoggedIn } = useAuth();

  const navigate = useNavigate();

  if (!userLoggedIn) {
    navigate("/login");
    return;
  }

  return (
    <div className="bg-gray-950 min-h-dvh">
      <ModalProvider>
        <Header />
        <Outlet />
        <Footer />
      </ModalProvider>
    </div>
  );
};

export default Layout;
