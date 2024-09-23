import { ContactListType } from "../../../Content/Home/Home";
import { FaEllipsis, FaMagnifyingGlass } from "react-icons/fa6";

interface Contact {
  contactList: ContactListType[];
}

function Contacts({ contactList }: Contact) {
  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString ? JSON.parse(currentUserString) : null;

  return (
    <>
      <div className="contacts-container">
        <div className="title-container">
          <h1 className="title">Contacts</h1>
          <div className="icon">
            <span>
              <FaMagnifyingGlass></FaMagnifyingGlass>
            </span>
          </div>
          <div className="icon">
            <span>
              <FaEllipsis></FaEllipsis>
            </span>
          </div>
        </div>
        {contactList.map((contact) =>
          contact.status === "online" && contact.id !== currentUser.id ? (
            <div className="contact" key={contact.id}>
              <img src={contact.image} className="profile-pic" />
              <span className="username">{contact.username}</span>
            </div>
          ) : null
        )}
      </div>
    </>
  );
}

export default Contacts;
