import Contacts from "../../../../Global/components/Contacts/Contacts";

function RightSideNav() {
  const contactList = [
    {
      username: "Aron Matoic",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: Math.random() * 100,
    },

    {
      username: "1",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: Math.random() * 100,
    },

    {
      username: "2",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: Math.random() * 100,
    },

    {
      username: "3",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: Math.random() * 100,
    },

    {
      username: "4",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: Math.random() * 100,
    },

    {
      username: "5",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: Math.random() * 100,
    },

    {
      username: "6",
      image: "/images/ProfilePicture.jpg",
      status: "offline",
      id: Math.random() * 100,
    },

    {
      username: "7",
      image: "/images/ProfilePicture.jpg",
      status: "online",
      id: Math.random() * 100,
    },

    {
      username: "8",
      image: "/images/ProfilePicture.jpg",
      status: "offline",
      id: Math.random() * 100,
    },
  ];

  return (
    <>
      <Contacts contacts={contactList}></Contacts>
    </>
  );
}

export default RightSideNav;
