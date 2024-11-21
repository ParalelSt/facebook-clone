import { forwardRef } from "react";
import ShareButtonBottom from "./ShareButtonBottom";
import ShareButtonMiddle from "./ShareButtonMiddle";
import BorderLine from "Global/components/BorderLine";
import ShareButtonTop from "./ShareButtonTop";
import ContentContainer from "Global/components/ContentContainer/ContentContainer";

interface ImageShareDropDownProps {
  isActive: boolean;
  closeFunction: (e: React.MouseEvent) => void;
}

const ImageShareDropDown = forwardRef<HTMLDivElement, ImageShareDropDownProps>(
  ({ isActive, closeFunction }, ref) => {
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
          <ShareButtonMiddle />
          <ShareButtonBottom />
        </ContentContainer>
      </div>
    );
  }
);

export default ImageShareDropDown;
