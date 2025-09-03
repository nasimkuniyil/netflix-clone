import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { useState } from "react";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";
import validateForm from "../../utils/validateRegisterForm";

function Register() {
  const [userInput, setUserInput] = useState({});
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let formValid = true;
    const validateResult = validateForm(userInput);

    if (!validateResult.isEmailValid) {
      setErrors((prev) => ({ ...prev, invalidEmail: "invalid email" }));
      formValid = false;
    }

    if (!validateResult.isPasswordValid) {
      setErrors((prev) => ({
        ...prev,
        invalidPassword: "Password shoud be included minimum 6 characters",
      }));
    }

    if (!validateResult.isPassword2Valid) {
      setErrors((prev) => ({
        ...prev,
        invalidPassword2: "Password not match",
      }));
      formValid = false;
    }

    if (!formValid) {
      return;
    }

    if (!isSigningIn) {
      setIsSigningIn(true);
      await doCreateUserWithEmailAndPassword(userInput);
    }
  };

  //submit form
  const handleFocusOut = (event) => {
    if (event.target.value.length >= 6) {
      userInput[event.target.id] = event.target.value;
      setUserInput(userInput);
    }
  };

  return (
    <div className="text-white">
      <div className="border-b-2 border-white/50">
        <img className="h-20 mx-auto" src="/netflix-text.png" alt="" />
      </div>
      <div className="pb-6 pt-5 ">
        <h2>Register</h2>
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
            placeholder={"New password"}
            type={"password"}
            id={"password"}
            invalid={errors?.invalidPassword}
            handleFocusOut={handleFocusOut}
            />
          <InputField
            placeholder={"Re-enter password"}
            type={"password"}
            id={"password2"}
            handleFocusOut={handleFocusOut}
            invalid={errors?.invalidPassword2}
          />
          <Button
            btnStyle={"bg-red-600 w-full text-white font-bold"}
            text={"Sign up"}
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
          Already have an account ?{" "}
          <NavLink className="font-bold" to={"/login"}>
            Login
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
}

export default Register;
