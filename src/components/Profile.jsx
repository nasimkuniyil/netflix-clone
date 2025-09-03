import { useAuth } from "../context/AuthProvider";
import { doSignOut } from "../firebase/auth";
import Button from "./Button";

export default function Profile() {
  const { currentUser } = useAuth();

  const handleSignOut = () => {
    doSignOut();
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center pb-8">
        <h1>Profile Page</h1>
        <h2>{currentUser?.displayName || "user name"}</h2>
      </div>
      <div>
        <Button
          text={"Sign out"}
          handleClick={handleSignOut}
          btnStyle={"bg-red-500"}
        />
      </div>
    </div>
  );
}
