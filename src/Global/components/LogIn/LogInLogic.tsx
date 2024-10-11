import { useNavigate } from "react-router-dom";
import { Users } from "../../../App";
import bcrypt from "bcryptjs";
import { useState } from "react";

function useLogInLogic(
  users: Users[],
  setIsAuthenticated: (isAuthenticated: boolean) => void,
  setCurrentUser: (user: Users | null) => void
) {
  const [emailOrPhoneError, setEmailOrPhoneError] = useState<string | null>("");
  const [passwordError, setPasswordError] = useState<string | null>("");

  const Navigate = useNavigate();

  const emailOrPhoneValidation = (emailOrPhoneValue: string) => {
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

  const passwordValidation = async (user: Users, passwordValue: string) => {
    const isPasswordValid = await bcrypt.compare(passwordValue, user.password);

    if (!isPasswordValid) {
      setPasswordError(
        "The password you've entered is incorrect. Forgot Password?"
      );
      return false;
    }
    return true;
  };

  const handleLogin = async (
    emailOrPhoneValue: string,
    passwordValue: string
  ) => {
    setEmailOrPhoneError(null);
    setPasswordError(null);

    const user = emailOrPhoneValidation(emailOrPhoneValue);
    if (!user) return false;
    const isPasswordValid = await passwordValidation(user, passwordValue);
    if (!isPasswordValid) return false;

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
