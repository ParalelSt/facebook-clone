import { Link } from "react-router-dom";
import BorderLine from "../BorderLine";
import "./LogIn.scss";

function LogIn() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="log-in-container">
        <div className="log-in-top-container">
          <div className="log-in-left-container">
            <h1>facebook</h1>
            <h2>Connect with friends and the world around you on Facebook</h2>
          </div>
          <div className="log-in-right-container">
            <div className="log-in-component">
              <div className="log-in">
                <div className="component-top">
                  <div className="email-or-phone-container">
                    <input type="text" className="email-or-phone" />
                  </div>
                  <div className="password-container">
                    <input type="text" className="password" />
                  </div>
                  <button className="log-in-btn">Log In</button>
                  <Link to={""}>Forgot password?</Link>
                </div>
                <BorderLine></BorderLine>
                <div className="component-bottom">
                  <button className="create-new-account-btn">
                    Create new account
                  </button>
                </div>
              </div>
              <span className="create-a-page">
                <Link to={""}>Create a Page</Link> for a celebrity, brand or
                business.
              </span>
            </div>
          </div>
        </div>
        <div className="log-in-bottom-container">
          <div className="languages"></div>
          <div className="options"></div>
          <span className="company">Meta &copy; {currentYear}</span>
        </div>
      </div>
    </>
  );
}

export default LogIn;
