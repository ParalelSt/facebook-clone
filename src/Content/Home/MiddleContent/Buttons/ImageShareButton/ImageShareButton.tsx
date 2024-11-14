import { PiShareFatLight } from "react-icons/pi";
import "Content/Home/MiddleContent/Buttons/ImageShareButton/ImageShareButton.scss";
import useDropDown from "Global/hooks/useDropDown";
import { useEffect, useRef } from "react";
import { Post } from "Content/PostTypes";
import ImageShareDropDown from "./ImageShareDropDown";

interface ImageShareButtonProps {
  post: Post;
  className?: string;
  copyBtnClassName?: string;
  copyBtnId?: string;
}

const ImageShareButton = ({ post, className }: ImageShareButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [handleDropDownOpen, handleDropDownClose, toggleDropDown, isActive] =
    useDropDown();

  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleCloseDropDown = (e: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        if (isActive) {
          handleDropDownClose();
        }
      }
    };

    document.body.addEventListener("click", handleCloseDropDown);
    console.log("DropDown isActive: ", isActive);

    return () => {
      document.body.removeEventListener("click", handleCloseDropDown);
    };
  }, [handleDropDownClose, isActive]);

  const handleOpenDropDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleDropDown();
  };

  return (
    <button
      className={`share-btn btn ${className} ${
        isActive ? "active" : "disabled"
      }`}
      onClick={handleOpenDropDown}
    >
      <PiShareFatLight />
      <span className="button-text">Share</span>
      <ImageShareDropDown isActive={isActive} />
    </button>
  );
};

export default ImageShareButton;
