import { v4 } from "uuid";
import "./SignUp.scss";
import moment from "moment";

function SignUp() {
  //A way to generate year values from 1905 to 2024 without writing them out one by one

  const endYear: number = new Date().getFullYear();
  const years: { year: number; id: string }[] = [];

  const birthdayYears = () => {
    for (let year = 1905; year <= endYear; year++) {
      years.push({ year, id: v4() });
    }
  };

  birthdayYears();

  //List of months, might need improvement

  const currentMonth = new Date().getMonth() + 1;
  console.log(currentMonth);

  const months: { month: string; number: number; id: string }[] = [
    {
      month: "January",
      number: 1,
      id: v4(),
    },

    {
      month: "February",
      number: 2,
      id: v4(),
    },

    {
      month: "March",
      number: 3,
      id: v4(),
    },

    {
      month: "April",
      number: 4,
      id: v4(),
    },

    {
      month: "May",
      number: 5,
      id: v4(),
    },

    {
      month: "June",
      number: 6,
      id: v4(),
    },

    {
      month: "July",
      number: 7,
      id: v4(),
    },

    {
      month: "August",
      number: 8,
      id: v4(),
    },

    {
      month: "September",
      number: 9,
      id: v4(),
    },

    {
      month: "October",
      number: 10,
      id: v4(),
    },

    {
      month: "November",
      number: 11,
      id: v4(),
    },

    {
      month: "December",
      number: 12,
      id: v4(),
    },
  ];

  //List of days

  const currentDay = moment().format("D");

  const days: { day: number; id: string }[] = [];

  const generateDays = () => {
    for (let i = 1; i <= 31; i++) {
      days.push({ day: i, id: v4() });
    }
  };

  generateDays();

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
                  defaultValue={currentMonth}
                >
                  {months.map((month) => (
                    <option key={month.id} value={month.number}>
                      {month.month}
                    </option>
                  ))}
                </select>
                <select
                  className="birthday-selector selector"
                  name="day"
                  id="day"
                  defaultValue={currentDay}
                >
                  {days.reverse().map((day) => {
                    return (
                      <option key={day.id} value={day.day}>
                        {day.day}
                      </option>
                    );
                  })}
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
                  <input
                    className="sex-radio"
                    type="radio"
                    id="female"
                    name="sex"
                  />
                </div>
                <div className="gender-selector selector">
                  <label htmlFor="male">Male</label>
                  <input
                    className="sex-radio"
                    type="radio"
                    id="male"
                    name="sex"
                  />
                </div>
                <div className="gender-selector selector">
                  <label htmlFor="custom">Custom</label>
                  <input
                    className="sex-radio"
                    type="radio"
                    id="custom"
                    name="sex"
                  />
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
                    <option value="he">He: "Wish him a happy birthday!"</option>
                    <option value="them">
                      They: "Wish them a happy birthday!"
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
