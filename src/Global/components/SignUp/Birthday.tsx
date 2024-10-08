import { useRef, useState } from "react";
import { v4 } from "uuid";

interface BirthdayProps {
  birthdayValid: boolean;
  setBirthdayValid: (birthdayValid: boolean) => void;
  monthValue: string;
  setMonthValue: (monthValue: string) => void;
  dayValue: string;
  setDayValue: (dayValue: string) => void;
  yearValue: string;
  setYearValue: (yearValue: string) => void;
  focusedInput: string | null;
  setFocusedInput: (focusedInput: string | null) => void;
}

function Birthday({
  birthdayValid,
  setBirthdayValid,
  monthValue,
  setMonthValue,
  dayValue,
  setDayValue,
  yearValue,
  setYearValue,
  focusedInput,
  setFocusedInput,
}: BirthdayProps) {
  //States, refs and values

  const monthRef = useRef<HTMLSelectElement>(null);
  const dayRef = useRef<HTMLSelectElement>(null);
  const yearRef = useRef<HTMLSelectElement>(null);

  const [birthdayError, setBirthdayError] = useState<string | null>(null);

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

  const days: { day: number; id: string }[] = [];

  const generateDays = () => {
    for (let i = 1; i <= 31; i++) {
      days.push({ day: i, id: v4() });
    }
  };

  generateDays();

  //Function to check the validity of the selected birthday

  const birthdayValidation = () => {
    const selectedYear = parseInt(yearRef?.current?.value || "0", 10);

    const currentYear = new Date().getFullYear();
    const minAllowedYear = currentYear - 5;

    if (selectedYear > minAllowedYear) {
      setBirthdayError(
        "It looks like you entered the wrong info. Please be sure to use your real birthday."
      );
      setBirthdayValid(false);
      return false;
    }

    setBirthdayError(null);
    setBirthdayValid(true);
    return true;
  };

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
          className={`birthday-selector selector ${
            birthdayError ? "active" : "disabled"
          }`}
          name="month"
          ref={monthRef}
          id="month"
          value={monthValue}
          onChange={(e) => {
            setMonthValue(e.target.value);
            birthdayValidation();
          }}
          onBlur={birthdayValidation}
          onFocus={() => setFocusedInput("birthday")}
        >
          {months.map((month) => (
            <option key={month.id} value={month.number}>
              {month.month}
            </option>
          ))}
        </select>
        {birthdayError && !birthdayValid && focusedInput === "birthday" && (
          <div className="error-display birthday-error">{birthdayError}</div>
        )}
        <select
          className={`birthday-selector selector ${
            birthdayError ? "active" : "disabled"
          }`}
          name="day"
          ref={dayRef}
          id="day"
          value={dayValue}
          onChange={(e) => {
            setDayValue(e.target.value);
            birthdayValidation();
          }}
          onBlur={birthdayValidation}
          onFocus={() => setFocusedInput("birthday")}
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
          className={`birthday-selector selector ${
            birthdayError ? "active" : "disabled"
          }`}
          name="year"
          ref={yearRef}
          id="year"
          value={yearValue}
          onChange={(e) => {
            setYearValue(e.target.value);
            birthdayValidation();
          }}
          onBlur={birthdayValidation}
          onFocus={() => {
            setFocusedInput("birthday");
          }}
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
  );
}

export default Birthday;
