import { PiShareFatLight } from "react-icons/pi";
import "Content/Home/MiddleContent/Buttons/ImageShareButton/ImageShareButton.scss";
import { useEffect, useRef, useState } from "react";
import ImageShareDropDown from "./ImageShareDropDown";
import { ContactListType } from "Content/Home/Home";

interface ImageShareButtonProps {
  className?: string;
  copyBtnClassName?: string;
  copyBtnId?: string;
  contacts: ContactListType[];
}

const ImageShareButton = ({
  className,
  copyBtnClassName,
  copyBtnId,
  contacts,
}: ImageShareButtonProps) => {
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

    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  const handleOpenDropDown = (event) => {
    console.log("Opening dropdown");
    event.stopPropagation();
    setIsActive(true);
    console.log(isActive);
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
        contacts={contacts}
      />
    </button>
  );
};

export default ImageShareButton;
