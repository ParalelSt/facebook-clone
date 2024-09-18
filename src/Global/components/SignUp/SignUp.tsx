import "./SignUp.scss";
import Birthday from "./Birthday";
import Gender from "./Gender";

function SignUp() {
  return (
    <>
      <div className="white-bg">
        <div className="sign-up-container">
          <div className="sign-up-top">
            <div className="top">
              <h1>Sign Up</h1>
            </div>
            <div className="bottom">
              <h4>It's quick and easy</h4>
            </div>
          </div>
          <div className="sign-up-bottom">
            <div className="top">
              <div className="name-fields sign-up-item">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
              </div>
              <div className="warning first-name">
                <span>What&apos;s your name?</span>
              </div>
              <div className="warning last-name">
                <span>What&apos;s your name?</span>
              </div>
              <div className="phone-or-email-field sign-up-item">
                <input type="text" placeholder="Mobile number or email" />
              </div>
              <div className="warning phone-or-email">
                <span>
                  You'll use this when you log in and if you ever need to reset
                  your password.
                </span>
              </div>
              <div className="password-field sign-up-item">
                <input type="text" placeholder="New password" />
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
                <button>Sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
