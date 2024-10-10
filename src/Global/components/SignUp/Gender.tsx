import { v4 } from "uuid";
import useDropDown from "../../hooks/useDropDown";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

interface GenderProps {
  focusedInput: string | null;
  setFocusedInput: (focusedInput: string) => void;
  setGenderValue: (genderValue: string | null) => void;
  pronounValue: string;
  setPronounValue: (pronounValue: string) => void;
  setOptionalGenderValue: (optionalGenderValue: string) => void;
}

export interface GenderHandle {
  genderValidation: () => boolean;
  pronounValidation: () => boolean;
}

const Gender = forwardRef(
  (
    {
      focusedInput,
      setFocusedInput,
      setGenderValue,
      pronounValue,
      setPronounValue,
      setOptionalGenderValue,
    }: GenderProps,
    ref
  ) => {
    const pronounRef = useRef<HTMLSelectElement>(null);
    const optionalGenderRef = useRef<HTMLInputElement>(null);

    const [genderError, setGenderError] = useState<string | null>("");
    const [pronounError, setPronounError] = useState<string | null>("");

    //List of pronouns
    const pronouns = [
      {
        value: "select your pronoun",
        name: "Select your pronoun",
        id: v4(),
      },

      {
        value: "she",
        name: 'She: "Wish her a happy birthday!"',
        id: v4(),
      },

      {
        value: "he",
        name: 'He: "Wish him a happy birthday!"',
        id: v4(),
      },

      {
        value: "they",
        name: 'They: "Wish them a happy birthday!"',
        id: v4(),
      },
    ];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [handleMenuOpen, handleMenuClose, _, isActive] = useDropDown();

    const femaleRadioRef = useRef<HTMLInputElement>(null);
    const maleRadioRef = useRef<HTMLInputElement>(null);
    const customRadioRef = useRef<HTMLInputElement>(null);

    const handleGenderInputChange = (value: string | null) => {
      setGenderValue(value);
    };

    const handleRadioClick = (
      radioRef: React.RefObject<HTMLInputElement>,
      value: string
    ) => {
      if (radioRef.current) {
        radioRef.current.checked = true;
        radioRef.current.click();
        handleGenderInputChange(value);
      }
    };

    const genderValidation = () => {
      const isGenderSelected =
        maleRadioRef?.current?.checked ||
        femaleRadioRef?.current?.checked ||
        customRadioRef?.current?.checked;

      if (!isGenderSelected) {
        setGenderError(
          "Please choose a gender. You can change who can see this later."
        );
        return false;
      }

      setGenderError(null);
      return true;
    };

    const pronounValidation = () => {
      const selectedPronoun = pronounValue;
      console.log(pronounValue);

      if (selectedPronoun === "select your pronoun") {
        setPronounError("Please select your pronoun.");
        console.log(pronounValue);
        return false;
      }

      setPronounError(null);
      return true;
    };

    useImperativeHandle(ref, () => ({
      genderValidation,
      pronounValidation,
    }));

    return (
      <div className="gender-field question-field">
        <div className="gender question">
          <span>Gender</span>
          <div className="img-container">
            <img src="/icons/Question-signup.svg" alt="" />
          </div>
        </div>
        <div className="gender-selectors">
          <div
            className={`gender-selector selector ${
              genderError ? "active" : "disabled"
            }`}
            onClick={() => handleRadioClick(femaleRadioRef, "Female")}
          >
            <label htmlFor="female">Female</label>
            <input
              className={`sex-radio`}
              type="radio"
              id="female"
              name="sex"
              ref={femaleRadioRef}
              onClick={(e) => {
                handleMenuClose();
                e.stopPropagation();
              }}
              onChange={() => handleGenderInputChange("Female")}
              onBlur={genderValidation}
              onFocus={() => setFocusedInput("sex")}
            />
            {genderError && focusedInput === "sex" && (
              <div className="error-display gender-error">{genderError}</div>
            )}
          </div>
          <div
            className={`gender-selector selector ${
              genderError ? "active" : "disabled"
            }`}
            onClick={() => handleRadioClick(maleRadioRef, "Male")}
          >
            <label htmlFor="male">Male</label>
            <input
              className={`sex-radio`}
              type="radio"
              id="male"
              name="sex"
              ref={maleRadioRef}
              onClick={(e) => {
                handleMenuClose();
                e.stopPropagation();
              }}
              onChange={() => {
                handleGenderInputChange("Male");
              }}
              onBlur={genderValidation}
              onFocus={() => setFocusedInput("sex")}
            />
          </div>
          <div
            className={`gender-selector selector ${
              genderError ? "active" : "disabled"
            }`}
            onClick={() => handleRadioClick(customRadioRef, "Custom")}
          >
            <label htmlFor="custom">Custom</label>
            <input
              className={`sex-radio`}
              type="radio"
              id="custom"
              name="sex"
              ref={customRadioRef}
              onClick={(e) => {
                handleMenuOpen();
                e.stopPropagation();
              }}
              onChange={() => handleGenderInputChange("Custom")}
              onBlur={genderValidation}
              onFocus={() => setFocusedInput("sex")}
            />
          </div>
        </div>
        <div
          id={"genderSelector"}
          className={`custom-gender-selector ${isActive ? "active" : ""}`}
        >
          <div className={`gender-selector`}>
            <select
              className={`pronoun-selector selector ${
                pronounError ? "active" : "disabled"
              }`}
              ref={pronounRef}
              name="pronoun"
              id="selector"
              value={pronounValue}
              onChange={(e) => {
                setPronounValue(e.target.value);
                pronounValidation();
              }}
              onBlur={pronounValidation}
              onFocus={() => setFocusedInput("pronoun")}
            >
              {pronouns.map((pronoun) => {
                return (
                  <option key={pronoun.id} value={pronoun.value}>
                    {pronoun.name}
                  </option>
                );
              })}
            </select>
            {pronounError && focusedInput === "pronoun" && (
              <div className="error-display pronoun-error">{pronounError}</div>
            )}
            <label htmlFor="pronoun-selector">
              Your pronoun is visible to everyone.
            </label>
            <input
              type="text"
              placeholder="Gender (optional)"
              ref={optionalGenderRef}
              onChange={(e) => setOptionalGenderValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default Gender;
