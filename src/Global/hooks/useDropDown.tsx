import { useState } from "react";

function useDropDown() {
  const [isActive, setIsActive] = useState(false);

  const toggleDropDown = () => {
    setIsActive(!isActive);
  };

  const handleDropDownOpen = () => {
    setIsActive(true);
  };

  const handleDropDownClose = () => {
    setIsActive(true);
  };

  return [handleDropDownOpen, handleDropDownClose, toggleDropDown, isActive];
}

export default useDropDown;
