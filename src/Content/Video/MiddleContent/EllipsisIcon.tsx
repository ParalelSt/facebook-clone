import { FaEllipsis } from "react-icons/fa6";
import "Content/Video/MiddleContent/EllipsisIcon.scss";

interface EllipsisIconProps {
  className?: string;
}

const EllipsisIcon = ({ className }: EllipsisIconProps) => {
  return (
    <div className={`ellipsis-icon ${className}`}>
      <span>
        <FaEllipsis></FaEllipsis>
      </span>
    </div>
  );
};

export default EllipsisIcon;
