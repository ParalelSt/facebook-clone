import { useNavigate } from "react-router-dom";
import { Users } from "../../../App";
import bcrypt from "bcryptjs";
import { useState } from "react";

function useLogInLogic(
  emailOrPhoneValue: string,
  passwordValue: string,
  users: Users[],
  setIsAuthenticated: (isAuthenticated: boolean) => void,
  setCurrentUser: (user: Users | null) => void
) {
  const [emailOrPhoneError, setEmailOrPhoneError] = useState<string | null>("");
  const [passwordError, setPasswordError] = useState<string | null>("");

  const Navigate = useNavigate();

  const emailOrPhoneValidation = () => {
    const user = users.find(
      (user) =>
        user.email === emailOrPhoneValue ||
        user.phoneNumber === emailOrPhoneValue
    );

    if (!user || emailOrPhoneValue.length === 0) {
      setEmailOrPhoneError(
        "The email or mobile number you entered isn't connected to an account."
      );
      return null;
    }

    setEmailOrPhoneError(null);
    return user;
  };

  const passwordValidation = async (user: Users) => {
    const isPasswordValid = await bcrypt.compare(passwordValue, user.password);

    if (!isPasswordValid) {
      setPasswordError(
        "The password you've entered is incorrect. Forgot Password?"
      );
      return false;
    }
    return true;
  };

  const handleLogin = async () => {
    setEmailOrPhoneError(null);
    setPasswordError(null);

    const user = emailOrPhoneValidation();
    if (!user) return;
    const isPasswordValid = await passwordValidation(user);
    if (!isPasswordValid) return;

    localStorage.setItem("isAuthenticated", "true");
    setCurrentUser(user);
    setIsAuthenticated(true);
    localStorage.setItem("currentUser", JSON.stringify(user));
    Navigate("/");
    return true;
  };

  return [
    handleLogin,
    emailOrPhoneError,
    passwordError,
    emailOrPhoneValidation,
    passwordValidation,
  ] as const;
}

export default useLogInLogic;
