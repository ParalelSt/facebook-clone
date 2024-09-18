import { v4 } from "uuid";
import useDropDown from "../../hooks/useDropDown";
import { useRef } from "react";

function Gender() {
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

  const femaleRadio = useRef<HTMLInputElement>(null);
  const maleRadio = useRef<HTMLInputElement>(null);
  const customRadio = useRef<HTMLInputElement>(null);

  const handleRadioClick = (radioRef: React.RefObject<HTMLInputElement>) => {
    if (radioRef.current) {
      radioRef.current.checked = true;
      radioRef.current.click();
    }
  };

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
          className="gender-selector selector"
          onClick={() => handleRadioClick(femaleRadio)}
        >
          <label htmlFor="female">Female</label>
          <input
            className="sex-radio"
            type="radio"
            id="female"
            name="sex"
            ref={femaleRadio}
            onClick={(e) => {
              handleMenuClose();
              e.stopPropagation();
            }}
          />
        </div>
        <div
          className="gender-selector selector"
          onClick={() => handleRadioClick(maleRadio)}
        >
          <label htmlFor="male">Male</label>
          <input
            className="sex-radio"
            type="radio"
            id="male"
            name="sex"
            ref={maleRadio}
            onClick={(e) => {
              handleMenuClose();
              e.stopPropagation();
            }}
          />
        </div>
        <div
          className="gender-selector selector"
          onClick={() => handleRadioClick(customRadio)}
        >
          <label htmlFor="custom">Custom</label>
          <input
            className="sex-radio"
            type="radio"
            id="custom"
            name="sex"
            ref={customRadio}
            onClick={(e) => {
              handleMenuOpen();
              e.stopPropagation();
            }}
          />
        </div>
      </div>
      <div
        id={"genderSelector"}
        className={`custom-gender-selector ${isActive ? "active" : ""}`}
      >
        <div className="gender-selector">
          <select
            className="selector"
            name="pronoun"
            id="pronoun-selector selector"
            defaultValue={"select your pronoun"}
          >
            {pronouns.map((pronoun) => {
              return (
                <option key={pronoun.id} value={pronoun.value}>
                  {pronoun.name}
                </option>
              );
            })}
          </select>
          <label htmlFor="pronoun-selector">
            Your pronoun is visible to everyone.
          </label>
          <input type="text" placeholder="Gender (optional)" />
        </div>
      </div>
    </div>
  );
}

export default Gender;
