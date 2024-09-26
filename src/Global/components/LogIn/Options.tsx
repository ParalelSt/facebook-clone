import { v4 } from "uuid";

const Options = () => {
  const options = [
    {
      optionName: "Sign Up",
      link: "/signup",
      id: v4(),
    },

    {
      optionName: "Log In",
      link: "/login",
      id: v4(),
    },

    {
      optionName: "Messenger",
      link: "",
      id: v4(),
    },
    {
      optionName: "Facebook Lite",
      link: "",
      id: v4(),
    },
    {
      optionName: "Video",
      link: "",
      id: v4(),
    },
    {
      optionName: "Places",
      link: "",
      id: v4(),
    },
    {
      optionName: "Games",
      link: "",
      id: v4(),
    },
    {
      optionName: "Marketplace",
      link: "",
      id: v4(),
    },
    {
      optionName: "Meta Pay",
      link: "",
      id: v4(),
    },
    {
      optionName: "Meta Store",
      link: "",
      id: v4(),
    },
    {
      optionName: "Meta Quest",
      link: "",
      id: v4(),
    },
    {
      optionName: "Ray-Ban Meta",
      link: "",
      id: v4(),
    },
    {
      optionName: "Meta AI",
      link: "",
      id: v4(),
    },
    {
      optionName: "Instagram",
      link: "",
      id: v4(),
    },
    {
      optionName: "Threads",
      link: "",
      id: v4(),
    },
    {
      optionName: "Fundraisers",
      link: "",
      id: v4(),
    },
    {
      optionName: "Services",
      link: "",
      id: v4(),
    },
    {
      optionName: "Voting Information Center",
      link: "",
      id: v4(),
    },
    {
      optionName: "Privacy Policy",
      link: "",
      id: v4(),
    },
    {
      optionName: "Privacy Center",
      link: "",
      id: v4(),
    },
    {
      optionName: "Cookie Settings",
      link: "",
      id: v4(),
    },
    {
      optionName: "Groups",
      link: "",
      id: v4(),
    },
    {
      optionName: "About",
      link: "",
      id: v4(),
    },
    {
      optionName: "Create ad",
      link: "",
      id: v4(),
    },
    {
      optionName: "Create Page",
      link: "",
      id: v4(),
    },
    {
      optionName: "Developers",
      link: "",
      id: v4(),
    },
    {
      optionName: "Careers",
      link: "",
      id: v4(),
    },
    {
      optionName: "Cookies",
      link: "",
      id: v4(),
    },
    {
      optionName: "Ad choices",
      link: "",
      id: v4(),
    },
    {
      optionName: "Terms",
      link: "",
      id: v4(),
    },
    {
      optionName: "Help",
      link: "",
      id: v4(),
    },
    {
      optionName: "Contact Uploading & Non-Users Settings",
      link: "",
      id: v4(),
    },
  ];

  return (
    <div className="options">
      <ul>
        {options.map((option) => {
          return (
            <li key={option.id}>
              <a href={option.link}>{option.optionName}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Options;
