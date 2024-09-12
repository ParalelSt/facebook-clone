import { Link } from "react-router-dom";
import "./LogIn.scss";
import BorderLine from "../BorderLine";
import { v4 } from "uuid";
import { useState } from "react";
import useLogInLogic from "./LogInLogic";

interface Language {
  language: string | null;
  id: string;
}

function LogIn({ setIsAuthenticated }) {
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [emailOrPhoneValue, setEmailOrPhoneValue] = useState<string>("");
  const [languages, setLanguages] = useState<Language[]>([
    {
      language: "English (US)",
      id: v4(),
    },

    {
      language: "Croatian",
      id: v4(),
    },

    {
      language: "Deutsch",
      id: v4(),
    },

    {
      language: "Italiano",
      id: v4(),
    },

    {
      language: "Српски",
      id: v4(),
    },

    {
      language: "Français (France)",
      id: v4(),
    },

    {
      language: "Slovenščina",
      id: v4(),
    },

    {
      language: "Shqip",
      id: v4(),
    },

    {
      language: "Español",
      id: v4(),
    },

    {
      language: "Português (Brasil)",
      id: v4(),
    },
  ]);

  const options = [
    {
      optionName: "Sign Up",
      link: "/signup",
      id: v4(),
    },

    {
      optionName: "Log In",
      link: "/login",
      id: v4(),
    },

    {
      optionName: "Messenger",
      link: "",
      id: v4(),
    },
    {
      optionName: "Facebook Lite",
      link: "",
      id: v4(),
    },
    {
      optionName: "Video",
      link: "",
      id: v4(),
    },
    {
      optionName: "Places",
      link: "",
      id: v4(),
    },
    {
      optionName: "Games",
      link: "",
      id: v4(),
    },
    {
      optionName: "Marketplace",
      link: "",
      id: v4(),
    },
    {
      optionName: "Meta Pay",
      link: "",
      id: v4(),
    },
    {
      optionName: "Meta Store",
      link: "",
      id: v4(),
    },
    {
      optionName: "Meta Quest",
      link: "",
      id: v4(),
    },
    {
      optionName: "Ray-Ban Meta",
      link: "",
      id: v4(),
    },
    {
      optionName: "Meta AI",
      link: "",
      id: v4(),
    },
    {
      optionName: "Instagram",
      link: "",
      id: v4(),
    },
    {
      optionName: "Threads",
      link: "",
      id: v4(),
    },
    {
      optionName: "Fundraisers",
      link: "",
      id: v4(),
    },
    {
      optionName: "Services",
      link: "",
      id: v4(),
    },
    {
      optionName: "Voting Information Center",
      link: "",
      id: v4(),
    },
    {
      optionName: "Privacy Policy",
      link: "",
      id: v4(),
    },
    {
      optionName: "Privacy Center",
      link: "",
      id: v4(),
    },
    {
      optionName: "Cookie Settings",
      link: "",
      id: v4(),
    },
    {
      optionName: "Groups",
      link: "",
      id: v4(),
    },
    {
      optionName: "About",
      link: "",
      id: v4(),
    },
    {
      optionName: "Create ad",
      link: "",
      id: v4(),
    },
    {
      optionName: "Create Page",
      link: "",
      id: v4(),
    },
    {
      optionName: "Developers",
      link: "",
      id: v4(),
    },
    {
      optionName: "Careers",
      link: "",
      id: v4(),
    },
    {
      optionName: "Cookies",
      link: "",
      id: v4(),
    },
    {
      optionName: "Ad choices",
      link: "",
      id: v4(),
    },
    {
      optionName: "Terms",
      link: "",
      id: v4(),
    },
    {
      optionName: "Help",
      link: "",
      id: v4(),
    },
    {
      optionName: "Contact Uploading & Non-Users Settings",
      link: "",
      id: v4(),
    },
  ];

  const firstIndex = languages[0];

  const swapListItems = (index1: number, index2: number) => {
    const splitLanguages = [...languages];
    const temp = splitLanguages[index1];
    splitLanguages[index1] = splitLanguages[index2];
    splitLanguages[index2] = temp;
    setLanguages(splitLanguages);
  };

  const handleLanguageClick = (clickedIndex: number) => {
    swapListItems(0, clickedIndex);
  };

  const currentYear = new Date().getFullYear();

  const users = [
    {
      user: "Aron Matoic",
      email: "aronddtt@gmail.com",
      phoneNumber: "0912229106",
      password: "da",
    },
  ];

  const handleLogin = useLogInLogic(
    emailOrPhoneValue,
    passwordValue,
    users,
    setIsAuthenticated
  );

  return (
    <>
      <div className="log-in-container">
        <div className="log-in-top-container">
          <div className="log-in-left-container">
            <div className="text-container">
              <h1>facebook</h1>
              <h2>
                Connect with friends and the world around you on Facebook.
              </h2>
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
                      className="email-or-phone"
                    />
                  </div>
                  <div className="password-container">
                    <input
                      placeholder="Password"
                      type="password"
                      value={passwordValue}
                      onChange={(e) => setPasswordValue(e.target.value)}
                      id="password"
                      className="password"
                    />
                  </div>
                  <button className="log-in-btn" onClick={handleLogin}>
                    Log In
                  </button>
                  <Link to={""}>Forgot password?</Link>
                </div>
                <BorderLine></BorderLine>
                <div className="component-bottom">
                  <button className="create-new-account-btn">
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
          <div className="content-container">
            <div className="languages">
              <ul>
                <li id="firstIndex">{firstIndex.language}</li>
                {languages
                  .filter((_, index) => index !== 0)
                  .map((language, index) => {
                    return (
                      <li className="language" key={language.id}>
                        <a
                          onClick={() => handleLanguageClick(index + 1)}
                          href="#"
                        >
                          {language.language}
                        </a>
                      </li>
                    );
                  })}
                <button className="add-language">+</button>
              </ul>
            </div>
            <BorderLine></BorderLine>
            <div className="options">
              <ul>
                {options.map((option) => {
                  return (
                    <li key={option.id}>
                      <a href={option.link}>{option.optionName}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <span className="company">Meta &copy; {currentYear}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
