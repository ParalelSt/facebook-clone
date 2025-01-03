import React from "react";
import { TbTriangleFilled } from "react-icons/tb";
import "Content/Home/MiddleContent/DropDownContainer.scss";

interface DropDownContainerProps {
  className?: string;
  ref: React.Ref<HTMLDivElement>;
  isActive: boolean;
  children: React.ReactNode;
}

const DropDownContainer = React.forwardRef<
  HTMLDivElement,
  DropDownContainerProps
>(({ className, isActive, children }, ref) => {
  const handleDropDownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`drop-down-container ${
        isActive ? "active" : "disabled"
      } ${className}`}
      ref={ref}
      onClick={handleDropDownClick}
    >
      <div className="children">{children}</div>
      <TbTriangleFilled className="triangle-icon" color="white" />
    </div>
  );
});

export default DropDownContainer;
