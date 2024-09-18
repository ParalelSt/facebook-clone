import { v4 } from "uuid";

function Gender() {
  //List of pronouns

  const pronouns = [
    {
      value: "",
      name: "",
      id: v4(),
    },

    {
      value: "",
      name: "",
      id: v4(),
    },

    {
      value: "",
      name: "",
      id: v4(),
    },

    {
      value: "",
      name: "",
      id: v4(),
    },
  ];

  return (
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
          <input className="sex-radio" type="radio" id="female" name="sex" />
        </div>
        <div className="gender-selector selector">
          <label htmlFor="male">Male</label>
          <input className="sex-radio" type="radio" id="male" name="sex" />
        </div>
        <div className="gender-selector selector">
          <label htmlFor="custom">Custom</label>
          <input className="sex-radio" type="radio" id="custom" name="sex" />
        </div>
      </div>
      <div className="custom-gender-selector">
        <div className="gender-selector">
          <select
            className="selector"
            name="pronoun"
            id="pronoun-selector selector"
            defaultValue={"select your pronoun"}
          >
            <option value="select your pronoun">Select your pronoun</option>
            <option value="she">She: "Wish her a happy birthday!"</option>
            <option value="he">He: "Wish him a happy birthday!"</option>
            <option value="them">They: "Wish them a happy birthday!"</option>
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
