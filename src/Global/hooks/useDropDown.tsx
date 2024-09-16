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
    setIsActive(false);
  };

  return [
    handleDropDownOpen,
    handleDropDownClose,
    toggleDropDown,
    isActive,
  ] as const;
}

export default useDropDown;
