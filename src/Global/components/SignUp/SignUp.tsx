import "./SignUp.scss";
import Birthday from "./Birthday";
import Gender from "./Gender";
import { IoClose } from "react-icons/io5";
import { useRef, useState } from "react";
import { v4 } from "uuid";
import { Users } from "../../../App";
import bcrypt from "bcryptjs";

interface SignUpProps {
  handleCreateClose: () => void;
  isActive: boolean;
  users: Users[];
  setUsers: React.Dispatch<React.SetStateAction<Users[]>>;
}

function SignUp({ handleCreateClose, isActive, users, setUsers }: SignUpProps) {
  //Validation

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    return phonePattern.test(phoneNumber);
  };

  //Sign up

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");

  const [firstNameError, setFirstNameError] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);

  const [phoneOrEmailError, setPhoneOrEmailError] = useState<string | null>(
    null
  );

  const firstNameCheck = () => {
    const firstNameLength = firstNameValue.length;

    if (!firstNameLength) {
      setFirstNameError("First name is required");
      return false;
    }

    if (firstNameLength > 12 || firstNameLength <= 1) {
      setFirstNameError(
        "The first name must contain... Check the first name and try again"
      );
      return false;
    }

    setFirstNameError(null);
    return true;
  };

  const lastNameCheck = () => {
    const lastNameLength = lastNameValue.length;

    if (!lastNameLength) {
      setLastNameError("Last name is required");
      return false;
    }

    if (lastNameLength > 12 || lastNameLength <= 1) {
      setLastNameError(
        "The last name must contain... Check the last name and try again"
      );
      return false;
    }

    setLastNameError(null);
    return true;
  };

  const phoneOrEmailRef = useRef<HTMLInputElement>(null);
  const [phoneOrEmailValue, setPhoneOrEmailValue] = useState("");

  const passwordRef = useRef<HTMLInputElement>(null);
  const [passwordValue, setPasswordValue] = useState("");

  //password hashing

  const userName = firstNameValue.trim() + " " + lastNameValue.trim();

  const validateUserName = (username: string) => {
    const userExists = users.some(
      (existingUser) => existingUser.user === username
    );

    if (userExists) {
      console.log("A user with that username already exists");
      return false;
    }

    return true;
  };

  const phoneOrEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event?.target.value;
    setPhoneOrEmailValue(inputValue);
  };

  const phoneOrEmailCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const phoneOrEmailValue = event?.target.value;
    const phoneOrEmailLength = phoneOrEmailValue?.length;

    if (!phoneOrEmailLength) {
      setPhoneOrEmailError("This field can not be empty");
      return false;
    }

    if (
      !validateEmail(phoneOrEmailValue) &&
      !validatePhoneNumber(phoneOrEmailValue)
    ) {
      setPhoneOrEmailError(
        "You'll use this when you log in and if you ever need to reset your password."
      );
      return false;
    } else {
      setPhoneOrEmailError(null);
    }
  };

  const password = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event?.target.value);
  };

  // const navigate = useNavigate();

  // const isPassword = validatePassword(passwordValue);

  const signUp = async () => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(passwordValue, saltRounds);
    const isEmail = validateEmail(phoneOrEmailValue);
    const isPhoneNumber = validatePhoneNumber(phoneOrEmailValue);
    const notExistingUsername = validateUserName(userName);

    firstNameCheck();

    const newUser = {
      user: notExistingUsername ? userName : "",
      email: isEmail ? phoneOrEmailValue : "",
      phoneNumber: isPhoneNumber ? phoneOrEmailValue : "",
      password: hashedPassword,
      profilePicture: "/icons/avatarDefault.svg",
      likedPosts: [],
      id: v4(),
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    localStorage.setItem("user", JSON.stringify(newUser));
    // navigate("/create-account");
  };

  const signUpValidation = async () => {
    const notExistingUsername = validateUserName(userName);
    const firstNameValid = firstNameCheck();
    const lastNameValid = lastNameCheck();
    const phoneOrEmailValid = phoneOrEmailCheck({
      target: {
        value: phoneOrEmailValue,
      },
    } as React.ChangeEvent<HTMLInputElement>);

    if (
      notExistingUsername &&
      firstNameValid &&
      lastNameValid &&
      phoneOrEmailValid
    ) {
      await signUp();
      handleCreateClose();
    }
  };

  return (
    <>
      <div className={`white-bg ${isActive ? "active" : ""}`}>
        <div className="sign-up-container">
          <div className="sign-up-top">
            <div className="top">
              <h1>Sign Up</h1>
              <IoClose onClick={handleCreateClose} />
            </div>
            <div className="bottom">
              <h4>It's quick and easy</h4>
            </div>
          </div>
          <div className="sign-up-bottom">
            <div className="top">
              <div className="name-fields sign-up-item">
                <input
                  type="text"
                  className={`${firstNameError ? "active" : ""}`}
                  placeholder="First name"
                  ref={firstNameRef}
                  value={firstNameValue}
                  onChange={(e) => {
                    setFirstNameValue(e.target.value);
                  }}
                  onBlur={firstNameCheck}
                />
                {firstNameError && (
                  <div className="error-display first-name-error">
                    {firstNameError}
                  </div>
                )}
                <input
                  type="text"
                  className={`${lastNameError ? "active" : ""}`}
                  placeholder="Last name"
                  ref={lastNameRef}
                  value={lastNameValue}
                  onChange={(e) => setLastNameValue(e.target.value)}
                  onBlur={lastNameCheck}
                />
                {lastNameError && (
                  <div className="error-display last-name-error">
                    {lastNameError}
                  </div>
                )}
              </div>

              <div className="phone-or-email-field sign-up-item">
                <input
                  type="text"
                  className={`${phoneOrEmailError ? "active" : "disabled"}`}
                  placeholder="Mobile number or email"
                  value={phoneOrEmailValue}
                  ref={phoneOrEmailRef}
                  onChange={(e) => {
                    phoneOrEmail(e);
                    phoneOrEmailCheck(e);
                  }}
                  onBlur={phoneOrEmailCheck}
                />
                {phoneOrEmailError && (
                  <div className="error-display email-error">
                    {phoneOrEmailError}
                  </div>
                )}
              </div>
              <div className="password-field sign-up-item">
                <input
                  type="password"
                  placeholder="New password"
                  value={passwordValue}
                  ref={passwordRef}
                  onChange={password}
                />
              </div>
            </div>
            <div className="bottom">
              <Birthday></Birthday>
              <Gender></Gender>
              <div className="text-container">
                <span className="top-span">
                  People who use our service may have uploaded your contact
                  information to Facebook. <a href="#">Learn more</a>.
                </span>
                <span>
                  By clicking Sign Up, you agree to our <a href="#">Terms</a>.
                  Learn how we collect, use and share your data in our{" "}
                  <a href="#">Privacy Policy</a> and how we use cookies and
                  similar technology in our <a href="#">Cookies Policy</a>. You
                  may receive SMS Notifications from us and can opt out any
                  time.
                </span>
              </div>
              <div className="sign-up">
                <button
                  onClick={() => {
                    signUpValidation();
                  }}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
