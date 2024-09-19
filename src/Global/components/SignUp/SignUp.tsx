import "./SignUp.scss";
import Birthday from "./Birthday";
import Gender from "./Gender";
import { IoClose } from "react-icons/io5";
import { useRef, useState } from "react";
import { v4 } from "uuid";
import { Users } from "../../../App";

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

  // const validatePassword = (password: string) => {
  //   const passwordPattern =
  //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$/;
  //   return passwordPattern.test(password);
  // };

  //Sign up

  //password hashing

  const salt = await bcrypt.genSalt(10);
  const bcrypt = require("bcryptjs");

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);

  const phoneOrEmailRef = useRef<HTMLInputElement>(null);
  const [phoneOrEmailValue, setPhoneOrEmailValue] = useState("");

  const passwordRef = useRef<HTMLInputElement>(null);
  const [passwordValue, setPasswordValue] = useState("");

  const userName =
    firstNameRef.current?.value.trim() +
    " " +
    lastNameRef.current?.value.trim();

  const phoneOrEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event?.target.value;
    setPhoneOrEmailValue(inputValue);
  };

  const password = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event?.target.value);
  };

  // const navigate = useNavigate();

  const signUp = () => {
    const isEmail = validateEmail(phoneOrEmailValue);
    const isPhoneNumber = validatePhoneNumber(phoneOrEmailValue);
    // const isPassword = validatePassword(passwordValue);

    const newUser = {
      user: userName,
      email: isEmail ? phoneOrEmailValue : "",
      phoneNumber: isPhoneNumber ? phoneOrEmailValue : "",
      password: passwordValue,
      profilePicture: "/images/ProfilePicture.jpg",
      id: v4(),
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    localStorage.setItem("user", JSON.stringify(newUser));
    // navigate("/create-account");
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
                  placeholder="First name"
                  ref={firstNameRef}
                />
                <input type="text" placeholder="Last name" ref={lastNameRef} />
              </div>
              <div className="warning first-name">
                <span>What&apos;s your name?</span>
              </div>
              <div className="warning last-name">
                <span>What&apos;s your name?</span>
              </div>
              <div className="phone-or-email-field sign-up-item">
                <input
                  type="text"
                  placeholder="Mobile number or email"
                  value={phoneOrEmailValue}
                  ref={phoneOrEmailRef}
                  onChange={phoneOrEmail}
                />
              </div>
              <div className="warning phone-or-email">
                <span>
                  You'll use this when you log in and if you ever need to reset
                  your password.
                </span>
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
              <div className="warning password">
                <span>
                  Enter a combination of at least six numbers, letters and
                  punctuation marks (like ! and &).
                </span>
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
                    signUp();
                    handleCreateClose();
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
