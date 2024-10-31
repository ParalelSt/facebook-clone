import { forwardRef, ReactNode } from "react";
import "Global/components/ContentContainer/ContentContainer.scss";

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

const ContentContainer = forwardRef<HTMLDivElement, ContentContainerProps>(
  ({ children, className }, ref) => {
    return (
      <div className={`content-container ${className}`} ref={ref}>
        {children}
      </div>
    );
  }
);

export default ContentContainer;
