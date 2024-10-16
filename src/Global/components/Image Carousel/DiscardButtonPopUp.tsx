import { useEffect, useRef } from "react";
import "Global/components/Image Carousel/DiscardButtonPopUp.scss";
import BorderLine from "../BorderLine";
import { CgClose } from "react-icons/cg";

interface DiscardButtonPopUpProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleImageDiscard: () => void;
}

const DiscardButtonPopUp = ({
  isOpen,
  setIsOpen,
  handleImageDiscard,
}: DiscardButtonPopUpProps) => {
  const previewRef = useRef<HTMLDivElement>(null);

  const closeDiscardItems = (e: MouseEvent) => {
    if (previewRef.current && !previewRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDiscardItems);
    return () => {
      document.removeEventListener("mousedown", closeDiscardItems);
    };
  });

  const handleCloseDiscardItemsOnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    isOpen && (
      <div className="discard-button-pop-up-background">
        <div className={`discard-items-display`} ref={previewRef}>
          <div className="discard-items-display-top">
            <h3>Discard story?</h3>
            <div className={"discard-items-display-top-close-button"}>
              <button onClick={handleCloseDiscardItemsOnClick}>
                <CgClose></CgClose>
              </button>
            </div>
          </div>
          <BorderLine></BorderLine>
          <div className="discard-items-display-bottom">
            <span className="discard-story-text">
              Are you sure you want to discard this story? Your story won't be
              saved.
            </span>
            <div className="button-container">
              <button className="continue-editing-button">
                Continue Editing
              </button>
              <button className="discard-button" onClick={handleImageDiscard}>
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DiscardButtonPopUp;
