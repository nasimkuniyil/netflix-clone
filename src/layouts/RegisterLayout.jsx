import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function RegisterLayout() {
  const { userLoggedIn } = useAuth();

  const navigate = useNavigate();

  if (userLoggedIn) {
    console.log('user logged in ')
    navigate('/');
    return;
  }

  return (
    <div>
      <div className="bg-gray-950 h-dvh bg-[url(/netflix-auth-bg.jpg)] animate-popup">
        <div className="h-full w-full flex justify-center items-center bg-linear-to-b from-gray-950/80 to-gray-950/60">
          <div className="bg-gray-950/70 backdrop-blur-xs rounded-md p-10 w-1/4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterLayout;
