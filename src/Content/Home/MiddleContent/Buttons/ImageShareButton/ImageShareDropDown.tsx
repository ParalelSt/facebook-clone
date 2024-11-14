import ContentContainer from "Global/components/ContentContainer/ContentContainer";
import ShareButtonTop from "./ShareButtonTop";
import ShareButtonMiddle from "./ShareButtonMiddle";
import ShareButtonBottom from "./ShareButtonBottom";
import BorderLine from "Global/components/BorderLine";

interface ImageShareDropDown {
  isActive: boolean;
}

const ImageShareDropDown = ({ isActive }: ImageShareDropDown) => {
  return (
    <div className={`white-bg ${isActive ? "active" : ""}`}>
      <ContentContainer className="image-share-drop-down">
        <ShareButtonTop />
        <BorderLine />
        <ShareButtonMiddle />
        <ShareButtonBottom />
      </ContentContainer>
    </div>
  );
};

export default ImageShareDropDown;
