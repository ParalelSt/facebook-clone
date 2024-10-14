import BorderLine from "Global/components/BorderLine";
import Contacts from "Global/components/Contacts/Contacts";
import "Global/components/Contacts/Contacts.scss";
import GroupChat from "Global/components/GroupChat/GroupChat";
import "Global/components/GroupChat/GroupChat.scss";
import { ContactListType } from "../Home";
import "Content/Home/RightSideNav/RightSideNav.scss";
import { v4 } from "uuid";

export interface ContactI {
  contactList: ContactListType[];
}

export interface GroupsType {
  groupName: string;
  image: string;
  id: string;
}

function RightSideNav({ contactList }: ContactI) {
  const groups: GroupsType[] = [
    {
      groupName: "Local Car Dealership",
      image: "/images/groups/dealership.jpg",
      id: v4(),
    },

    {
      groupName: "Cuisine",
      image: "/images/groups/cuisine.jpeg",
      id: v4(),
    },

    {
      groupName: "Classroom 4b",
      image: "/images/groups/classroom.jpg",
      id: v4(),
    },

    {
      groupName: "Danville Music",
      image: "/images/groups/guitar-store.jpg",
      id: v4(),
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
