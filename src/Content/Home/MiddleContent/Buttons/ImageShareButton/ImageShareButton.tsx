import { PiShareFatLight } from "react-icons/pi";
import "Content/Home/MiddleContent/Buttons/ImageShareButton/ImageShareButton.scss";
import { useEffect, useRef, useState } from "react";
import ImageShareDropDown from "./ImageShareDropDown";

interface ImageShareButtonProps {
  className?: string;
  copyBtnClassName?: string;
  copyBtnId?: string;
}

const ImageShareButton = ({ className }: ImageShareButtonProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOpenDropDown = () => {
    console.log("Opening dropdown");
    setIsActive(true);
  };

  const handleCloseDropDown = () => {
    console.log("Closing dropdown");
    setIsActive(false);
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
      <ImageShareDropDown
        closeFunction={handleCloseDropDown}
        ref={dropdownRef}
        isActive={isActive}
      />
    </button>
  );
};

export default ImageShareButton;
