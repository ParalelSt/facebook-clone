import Contact from "./Contact";

function Contacts({ contactList }) {
  return (
    <>
      <div className="contacts-container">
        <Contact contacts={contactList}></Contact>
      </div>
    </>
  );
}

export default Contacts;
