import { v4 } from "uuid";
import "./SignUp.scss";

function SignUp() {
  const endYear: number = new Date().getFullYear();
  const years: { year: number; id: string }[] = [];

  const birthdayYears = () => {
    for (let year = 1905; year <= endYear; year++) {
      years.push({ year, id: v4() });
    }
  };

  birthdayYears();
  console.log(years);

  return (
    <>
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
            <div className="phone-or-email-field sign-up-item">
              <input type="text" placeholder="Mobile number or email" />
            </div>
            <div className="password-field sign-up-item">
              <input type="text" placeholder="New password" />
            </div>
          </div>
          <div className="bottom">
            <div className="birthday-field question-field">
              <div className="birthday question">
                <span>Birthday</span>
                <div className="img-container">
                  <img src="/icons/Question-signup.svg" alt="" />
                </div>
              </div>
              <div className="birthday-selectors">
                <select
                  className="birthday-selector selector"
                  name="month"
                  id="month"
                >
                  <option value="Sep">Sep</option>
                </select>
                <select
                  className="birthday-selector selector"
                  name="day"
                  id="day"
                >
                  <option value="17">17</option>
                </select>
                <select
                  className="birthday-selector selector"
                  name="year"
                  id="year"
                >
                  {years.reverse().map((year) => {
                    return (
                      <option key={year.id} value={year.year}>
                        {year.year}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="gender-field question-field">
              <div className="gender question">
                <span>Gender</span>
                <div className="img-container">
                  <img src="/icons/Question-signup.svg" alt="" />
                </div>
              </div>
              <div className="gender-selectors">
                <div className="gender-selector selector">
                  <label htmlFor="female">Female</label>
                  <input type="radio" id="female" />
                </div>
                <div className="gender-selector selector">
                  <label htmlFor="male">Male</label>
                  <input type="radio" id="male" />
                </div>
                <div className="gender-selector selector">
                  <label htmlFor="custom">Custom</label>
                  <input type="radio" id="custom" />
                </div>
              </div>
              <div className="custom-gender-selector">
                <div className="gender-selector">
                  <select
                    className="selector"
                    name="pronoun"
                    id="pronoun-selector selector"
                  >
                    <option disabled value="select your pronoun">
                      Select your pronoun
                    </option>
                    <option value="she">
                      She: "Wish her a happy birthday!"
                    </option>
                    <option value="he">
                      She: "Wish him a happy birthday!"
                    </option>
                    <option value="them">
                      She: "Wish them a happy birthday!"
                    </option>
                  </select>
                  <label htmlFor="pronoun-selector">
                    Your pronoun is visible to everyone.
                  </label>
                  <input type="text" placeholder="Gender (optional)" />
                </div>
              </div>
            </div>
            <div className="text-container">
              <span>
                People who use our service may have uploaded your contact
                information to Facebook. <a href="#">Learn more</a>.
              </span>
              <span>
                By clicking Sign Up, you agree to our <a href="#">Terms</a>.
                Learn how we collect, use and share your data in our{" "}
                <a href="#">Privacy Policy</a> and how we use cookies and
                similar technology in our <a href="#">Cookies Policy</a>. You
                may receive SMS Notifications from us and can opt out any time.
              </span>
            </div>
            <div className="sign-up">
              <button>Sign up</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
