import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { doSignInWithEmailAndPassword } from "../../firebase/auth";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import validateForm from "../../utils/validateRegisterForm";

const login = () => {
  const [userInput, setUserInput] = useState({});
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errors, setErrors] = useState(null)

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(userInput);

      const validateResult = validateForm(userInput);

    if (!validateResult.isEmailValid) {
      setErrors((prev) => ({ ...prev, invalidEmail: "invalid email" }));
      formValid = false;
    }

    if (!validateResult.isEmailValid) {
      setErrors((prev) => ({
        ...prev,
        invalidPassword: "Password shoud be included minimum 6 characters",
      }));
      formValid = false;
    }

    if (!formValid) {
      return;
    }

      if (!isSigningIn) {
        await doSignInWithEmailAndPassword(userInput);
        setIsSigningIn(true);
      }
    } catch (error) {
      console.log("signin :", error);
      toast('check your email and passwrod');
    } finally {
      setIsSigningIn(false);
    }
  };
  
  const handleFocusOut = (event) => {
    userInput[event.target.id] = event.target.value;
    setUserInput(userInput);
  };
  
  return (
    <div className="text-white">
      <Toaster position="top-center"/>
      <div className="border-b-2 border-white/50">
        <img className="h-20 mx-auto" src="/netflix-text.png" alt="" />
      </div>
      <div className="pb-6 pt-5 ">
        <h2>Sign In</h2>
      </div>
      <div className="pb-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <InputField
            placeholder={"Your email"}
            type={"email"}
            id={"email"}
            handleFocusOut={handleFocusOut}
            invalid={errors?.invalidEmail}
          />
          <InputField
            placeholder={"Password"}
            type={"password"}
            id={"password"}
            handleFocusOut={handleFocusOut}
            invalid={errors?.invalidPassword}
          />
          <Button
            btnStyle={"bg-red-600 w-full text-white font-bold"}
            text={"Sign in"}
          />
        </form>
      </div>
      <div className="text-center pb-5 text-white/40">
        <span>- or -</span>
      </div>
      <div className="pb-5">
        <Button
          btnStyle={"w-full bg-gray-500/60"}
          text={"Use a sign-in code"}
        />
      </div>
      <div className="pb-8">
        <p className="text-sm">
          New to Netflix ?{" "}
          <NavLink className="font-bold" to={"/register"}>
            Sign up now
          </NavLink>
        </p>
      </div>
      <div>
        <p className="text-xs font-light">
          This site is protected by google reCAPTCHA to ensure you are not a
          bot. <span>Learn more.</span>
        </p>
      </div>
    </div>
  );
};

export default login;
