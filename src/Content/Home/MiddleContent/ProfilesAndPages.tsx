import { FaSearch } from "react-icons/fa";
import "./ProfilesAndPages.scss";
import { Users } from "../../../App";
import { FaPlus } from "react-icons/fa6";
import ContentContainer from "../../../Global/components/ContentContainer/ContentContainer";
import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import useLogInLogic from "../../../Global/components/LogIn/LogInLogic";

interface ProfileAndPagesProps {
  users: Users[];
  dropDownClose: () => void;
  isActive: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setCurrentUser: (user: Users | null) => void;
}

const ProfilesAndPages = ({
  users,
  dropDownClose,
  isActive,
  setIsAuthenticated,
  setCurrentUser,
}: ProfileAndPagesProps) => {
  //Handle Modal Close

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeDropDown = (e: Event) => {
      console.log(e);
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        dropDownClose();
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, [dropDownClose]);

  //Handle Login

  const handleLogin = useLogInLogic();

  return (
    <div
      className={`profiles-and-pages-background ${isActive ? "active" : ""}`}
    >
      <ContentContainer ref={modalRef}>
        <div className="profiles-and-pages-container">
          <div className="top-container">
            <h1>Your profiles & Pages</h1>
            <div className="img-container" onClick={dropDownClose}>
              <IoClose></IoClose>
            </div>
          </div>
          <div className="bottom-container">
            <h4>
              Switch to interact on this post as a different profile or Page.{" "}
              <a href="#">Learn more.</a>
            </h4>
            <div className="input-container">
              <div className="container">
                <FaSearch></FaSearch>
                <input placeholder="Search profiles and Pages" type="text" />
              </div>
            </div>
            <div className="account-list">
              {users.map((user) => {
                return (
                  <div
                    className="account"
                    onClick={() =>
                      handleLogin(
                        user.email || user.phoneNumber,
                        user.password,
                        users,
                        setIsAuthenticated,
                        setCurrentUser
                      )
                    }
                    key={user.id}
                  >
                    <img src={user.profilePicture} alt="" />
                    <span>{user.user}</span>
                  </div>
                );
              })}
              <div className="line"></div>
              <button className="create-account-btn account">
                <div className="icon-container">
                  <FaPlus></FaPlus>
                </div>
                <span>Create</span>
              </button>
            </div>
            <div className="btn-container">
              <button className="accounts-center">Go to Accounts Center</button>
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default ProfilesAndPages;
