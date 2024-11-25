import { forwardRef } from "react";
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

    return (
      <div
        onClick={handleClick}
        ref={ref}
        className={`white-bg ${isActive ? "active" : ""}`}
      >
        <ContentContainer className="image-share-drop-down">
          <ShareButtonTop closeFunction={closeFunction} />
          <BorderLine />
          <ShareButtonMiddle contacts={contacts} />
          <ShareButtonBottom />
        </ContentContainer>
      </div>
    );
  }
);

export default ImageShareDropDown;
