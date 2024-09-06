import BorderLine from "../../../../Global/components/BorderLine";
import Contacts from "../../../../Global/components/Contacts/Contacts";
import "../../../../Global/components/Contacts/Contacts.scss";
import GroupChat from "../../../../Global/components/GroupChat/GroupChat";
import "../../../../Global/components/GroupChat/GroupChat.scss";

export interface ContactListType {
  username: string;
  image: string;
  status: string;
  id: number;
}

export interface GroupsType {
  groupName: string;
  image: string;
  id: number;
}

function RightSideNav() {
  const contactList: ContactListType[] = [
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

  const groups: GroupsType[] = [
    {
      groupName: "Group1",
      image: "/images/ProfilePicture.jpg",
      id: Math.random() * 100,
    },

    {
      groupName: "Group2",
      image: "/images/ProfilePicture.jpg",
      id: Math.random() * 100,
    },

    {
      groupName: "Group3",
      image: "/images/ProfilePicture.jpg",
      id: Math.random() * 100,
    },

    {
      groupName: "Group4",
      image: "/images/ProfilePicture.jpg",
      id: Math.random() * 100,
    },
  ];

  return (
    <div className="container">
      <Contacts contactList={contactList}></Contacts>
      <BorderLine></BorderLine>
      <GroupChat groups={groups}></GroupChat>
    </div>
  );
}

export default RightSideNav;
