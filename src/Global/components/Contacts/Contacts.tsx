import { ContactListType } from "../../../Navbar/Content/Home/RightSideNav/RightSideNav";

interface Contact {
  contactList: ContactListType[];
}

function Contacts({ contactList }: Contact) {
  return (
    <>
      <div className="contacts-container">
        {contactList.map((contact) =>
          contact.status === "online" ? (
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
