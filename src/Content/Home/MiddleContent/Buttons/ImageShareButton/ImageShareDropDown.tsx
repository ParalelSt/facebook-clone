import { forwardRef, useEffect, useState } from "react";
import ShareButtonBottom from "./ShareButtonBottom";
import ShareButtonMiddle from "./ShareButtonMiddle";
import BorderLine from "Global/components/BorderLine";
import ShareButtonTop from "./ShareButtonTop";
import ContentContainer from "Global/components/ContentContainer/ContentContainer";
import { ContactListType } from "Content/Home/Home";

interface ImageShareDropDownProps {
  isActive: boolean;
  closeFunction: (e: React.MouseEvent) => void;
  contacts: ContactListType[];
}

const ImageShareDropDown = forwardRef<HTMLDivElement, ImageShareDropDownProps>(
  ({ isActive, closeFunction, contacts }, ref) => {
    const handleClick = (e: React.MouseEvent) => {
      e.stopPropagation();

      if (e.target === e.currentTarget) {
        closeFunction(e);
      }
    };

    const [selectedContacts, setSelectedContacts] = useState<
      Record<string, boolean>
    >(() =>
      contacts.reduce(
        (acc, contact) => ({
          ...acc,
          [contact.id]: false,
        }),
        {} as Record<string, boolean>
      )
    );

    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          closeFunction(event as unknown as React.MouseEvent);
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    });

    return (
      <div
        onClick={handleClick}
        ref={ref}
        className={`white-bg ${isActive ? "active" : ""}`}
      >
        <ContentContainer className="image-share-drop-down">
          <ShareButtonTop closeFunction={closeFunction} />
          <BorderLine />
          <ShareButtonMiddle
            selectedContacts={selectedContacts}
            setSelectedContacts={setSelectedContacts}
            contacts={contacts}
          />
          <ShareButtonBottom
            isOpen={isActive}
            selectedContacts={selectedContacts}
            setSelectedContacts={setSelectedContacts}
            closeFunction={closeFunction}
          />
        </ContentContainer>
      </div>
    );
  }
);

export default ImageShareDropDown;
