import moment from "moment";
import { v4 } from "uuid";

function Birthday() {
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
        <select className="birthday-selector selector" name="year" id="year">
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
  );
}

export default Birthday;
