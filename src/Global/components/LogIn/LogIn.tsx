/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from "react-router-dom";
import "./LogIn.scss";
import BorderLine from "../BorderLine";
import { useEffect, useState } from "react";
import useLogInLogic from "./LogInLogic";
import useBodyClass from "../../hooks/useBodyClass";
import { Users } from "../../../App";
import SignUp from "../SignUp/SignUp";
import useDropDown from "../../hooks/useDropDown";
import Options from "./Options";
import LanguageList from "./LanguageList";

interface LogInProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  users: Users[];
  emailOrPhoneValue: string;
  setEmailOrPhoneValue: (emailOrPhoneValue: string) => void;
  passwordValue: string;
  setPasswordValue: (passwordValue: string) => void;
  setCurrentUser: (user: Users | null) => void;
  setUsers: React.Dispatch<React.SetStateAction<Users[]>>;
}

function LogIn({
  setIsAuthenticated,
  users,
  emailOrPhoneValue,
  setEmailOrPhoneValue,
  passwordValue,
  setPasswordValue,
  setCurrentUser,
  setUsers,
}: LogInProps) {
  useBodyClass("login-body");

  const currentYear = new Date().getFullYear(); //Variable for setting the current year next to "Meta"

  //Log in functions

  const [focusedInput, setFocusedInput] = useState<string | null>("");

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setIsAuthenticated(true);
      setCurrentUser(JSON.parse(savedUser));
    }
  }, [setIsAuthenticated, setCurrentUser]);

  const [
    handleLogin,
    emailOrPhoneError,
    passwordError,
    emailOrPhoneValidation,
    passwordValidation,
  ] = useLogInLogic(users, setIsAuthenticated, setCurrentUser);

  const handleEmailOrPhoneBlur = () => {
    emailOrPhoneValidation(emailOrPhoneValue);
  };

  const handlePasswordBlur = async () => {
    const user = emailOrPhoneValidation(emailOrPhoneValue);
    if (user) {
      await passwordValidation(user, passwordValue);
    }
  };

  //Sign up

  const [handleCreateOpen, handleCreateClose, _, isActive] = useDropDown();

  return (
    <div className="log-in-container">
      <div className="log-in-top-container">
        <div className="log-in-left-container">
          <div className="text-container">
            <h1>facebook</h1>
            <h2>Connect with friends and the world around you on Facebook.</h2>
          </div>
        </div>
        <div className="log-in-right-container">
          <div className="log-in-component">
            <div className="log-in">
              <div className="component-top">
                <div className="email-or-phone-container">
                  <input
                    placeholder="Email or phone number"
                    type="text"
                    value={emailOrPhoneValue}
                    onChange={(e) => setEmailOrPhoneValue(e.target.value)}
                    id="emailOrPhone"
                    className={`email-or-phone ${
                      emailOrPhoneError ? "active" : "disabled"
                    }`}
                    onFocus={() => setFocusedInput("emailOrPhone")}
                    onBlur={handleEmailOrPhoneBlur}
                  />
                  {emailOrPhoneError && focusedInput === "emailOrPhone" && (
                    <div className="error-display log-in-error">
                      {emailOrPhoneError}
                    </div>
                  )}
                </div>
                <div className="password-container">
                  <input
                    placeholder="Password"
                    type="password"
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    id="password"
                    className={`password ${
                      passwordError ? "active" : "disabled"
                    }`}
                    onFocus={() => setFocusedInput("password")}
                    onBlur={handlePasswordBlur}
                  />
                  {passwordError && focusedInput === "password" && (
                    <div className="error-display log-in-error password-error">
                      {passwordError}
                    </div>
                  )}
                </div>
                <button
                  className="log-in-btn"
                  onClick={() => {
                    handleLogin(emailOrPhoneValue, passwordValue);
                  }}
                >
                  Log In
                </button>
                <Link to={""}>Forgot password?</Link>
              </div>
              <BorderLine></BorderLine>
              <div className="component-bottom">
                <button
                  onClick={() => {
                    handleCreateOpen();
                    setFocusedInput("signUp");
                  }}
                  className="create-new-account-btn"
                >
                  Create new account
                </button>
              </div>
            </div>
            <div className="create-a-page">
              <Link to={""}>Create a Page</Link> for a celebrity, brand or
              business.
            </div>
          </div>
        </div>
      </div>
      <div className="log-in-bottom-container">
        <div className="log-in-content-container">
          <LanguageList></LanguageList>
          <BorderLine></BorderLine>
          <Options></Options>
          <span className="company">Meta &copy; {currentYear}</span>
        </div>
      </div>

      <SignUp
        users={users}
        setUsers={setUsers}
        handleCreateClose={handleCreateClose}
        isActive={isActive}
        focusedInput={focusedInput}
        setFocusedInput={setFocusedInput}
      ></SignUp>
    </div>
  );
}

export default LogIn;
