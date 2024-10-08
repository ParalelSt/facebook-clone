import "./SignUp.scss";
import Birthday from "./Birthday";
import Gender from "./Gender";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";
import { Users } from "../../../App";
import bcrypt from "bcryptjs";

interface SignUpProps {
  handleCreateClose: () => void;
  isActive: boolean;
  users: Users[];
  setUsers: React.Dispatch<React.SetStateAction<Users[]>>;
}

function SignUp({ handleCreateClose, users, isActive, setUsers }: SignUpProps) {
  //Validation

  const validateEmail = (email: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    return phonePattern.test(phoneNumber);
  };

  const validatePassword = (password: string) => {
    const passwordPattern =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,}$/;
    return passwordPattern.test(password);
  };

  //Sign up

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const phoneOrEmailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [phoneOrEmailValue, setPhoneOrEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [dayValue, setDayValue] = useState("");
  const [yearValue, setYearValue] = useState("");

  const [firstNameError, setFirstNameError] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const [phoneOrEmailError, setPhoneOrEmailError] = useState<string | null>(
    null
  );

  const [passwordError, setPasswordError] = useState<string | null>(null);

  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const [birthdayValid, setBirthdayValid] = useState(false);

  //First name

  const firstNameCheck = () => {
    const firstNameLength = firstNameValue.length;

    // if (!firstNameLength) {
    //   setFirstNameError("First name is required");
    //   return false;
    // }

    if (firstNameLength > 12 || firstNameLength <= 1) {
      setFirstNameError("What's your name?");
      return false;
    }

    setFirstNameError(null);
    return true;
  };

  //Last name

  const lastNameCheck = () => {
    const lastNameLength = lastNameValue.length;

    // if (!lastNameLength) {
    //   setLastNameError("Last name is required");
    //   return false;
    // }

    if (lastNameLength > 12 || lastNameLength <= 1) {
      setLastNameError("What's your name?");
      return false;
    }

    setLastNameError(null);
    return true;
  };

  //Phone and Email

  const userName = firstNameValue.trim() + " " + lastNameValue.trim();

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
    }
    const emailOrPhoneExists = users.find(
      (user) =>
        user.email === phoneOrEmailValue ||
        user.phoneNumber === phoneOrEmailValue
    );

    if (emailOrPhoneExists) {
      setPhoneOrEmailError(
        "A user with that email address or phone number already exists. Please use another email address or phone number."
      );
      return false;
    }

    setPhoneOrEmailError(null);
    return true;
  };

  //Password

  const password = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event?.target.value);
  };

  const passwordCheck = () => {
    if (!validatePassword(passwordValue)) {
      setPasswordError(
        "Enter a combination of at least six numbers, letters and punctuation marks (like ! and &)."
      );
      return false;
    } else {
      setPasswordError(null);
      return true;
    }
  };

  //Birthday

  const signUp = async () => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(passwordValue, saltRounds);
    const isEmail = validateEmail(phoneOrEmailValue);
    const isPhoneNumber = validatePhoneNumber(phoneOrEmailValue);

    firstNameCheck();

    const newUser = {
      user: userName,
      email: isEmail ? phoneOrEmailValue : "",
      phoneNumber: isPhoneNumber ? phoneOrEmailValue : "",
      password: hashedPassword,
      birthday: { month: monthValue, day: dayValue, year: yearValue },
      profilePicture: "/icons/avatarDefault.svg",
      likedPosts: [],
      id: v4(),
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    localStorage.setItem("user", JSON.stringify(newUser));
    // navigate("/create-account");
  };

  const signUpValidation = async () => {
    const firstNameValid = firstNameCheck();
    const lastNameValid = lastNameCheck();
    const phoneOrEmailValid = phoneOrEmailCheck({
      target: {
        value: phoneOrEmailValue,
      },
    } as React.ChangeEvent<HTMLInputElement>);
    const passwordValid = passwordCheck();

    if (
      firstNameValid &&
      lastNameValid &&
      phoneOrEmailValid &&
      passwordValid &&
      birthdayValid
    ) {
      await signUp();
      handleCreateClose();
    }
  };

  //Autofocus for first Input box
  useEffect(() => {
    firstNameRef?.current?.focus();
  }, []);

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
                    firstNameCheck();
                  }}
                  onBlur={firstNameCheck}
                  onFocus={() => setFocusedInput("firstName")}
                />
                {firstNameError && focusedInput === "firstName" && (
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
                  onChange={(e) => {
                    setLastNameValue(e.target.value);
                    lastNameCheck();
                  }}
                  onBlur={lastNameCheck}
                  onFocus={() => setFocusedInput("lastName")}
                />
                {lastNameError && focusedInput === "lastName" && (
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
                  onFocus={() => setFocusedInput("phoneOrEmail")}
                />
                {phoneOrEmailError && focusedInput === "phoneOrEmail" && (
                  <div className="error-display email-error">
                    {phoneOrEmailError}
                  </div>
                )}
              </div>
              <div className="password-field sign-up-item">
                <input
                  type="password"
                  placeholder="New password"
                  className={passwordError ? "active" : ""}
                  value={passwordValue}
                  ref={passwordRef}
                  onChange={password}
                  onBlur={passwordCheck}
                  onFocus={() => setFocusedInput("password")}
                />
                {passwordError && focusedInput === "password" && (
                  <div className="error-display email-error">
                    {passwordError}
                  </div>
                )}
              </div>
            </div>
            <div className="bottom">
              <Birthday
                birthdayValid={birthdayValid}
                setBirthdayValid={setBirthdayValid}
                monthValue={monthValue}
                dayValue={dayValue}
                yearValue={yearValue}
                focusedInput={focusedInput}
                setMonthValue={setMonthValue}
                setDayValue={setDayValue}
                setYearValue={setYearValue}
                setFocusedInput={setFocusedInput}
              ></Birthday>
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
