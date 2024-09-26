import { useState } from "react";
import { v4 } from "uuid";

interface Language {
  language: string | null;
  id: string;
}

const LanguageList = () => {
  //Function to change the list of items inside the list of languages at the bottom

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

  return (
    <div className="languages">
      <ul>
        <li id="firstIndex">{firstIndex.language}</li>
        {languages
          .filter((_, index) => index !== 0)
          .map((language, index) => {
            return (
              <li className="language" key={language.id}>
                <a onClick={() => handleLanguageClick(index + 1)} href="#">
                  {language.language}
                </a>
              </li>
            );
          })}
        <button className="add-language">+</button>
      </ul>
    </div>
  );
};

export default LanguageList;
