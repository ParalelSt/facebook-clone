import BorderLine from "../../../Global/components/BorderLine";
import Contacts from "../../../Global/components/Contacts/Contacts";
import "../../../Global/components/Contacts/Contacts.scss";
import GroupChat from "../../../Global/components/GroupChat/GroupChat";
import "../../../Global/components/GroupChat/GroupChat.scss";
import { ContactListType } from "../Home";
import "./RightSideNav.scss";

export interface ContactI {
  contactList: ContactListType[];
}

export interface GroupsType {
  groupName: string;
  image: string;
  id: number;
}

function RightSideNav({ contactList }: ContactI) {
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
    <div className="right-side-nav-container">
      <Contacts contactList={contactList}></Contacts>
      <BorderLine></BorderLine>
      <GroupChat groups={groups}></GroupChat>
    </div>
  );
}

export default RightSideNav;
