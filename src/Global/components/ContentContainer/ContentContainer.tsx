import { forwardRef, ReactNode } from "react";
import "./ContentContainer.scss";

interface ContentContainerProps {
  children: ReactNode;
}

const ContentContainer = forwardRef<HTMLDivElement, ContentContainerProps>(
  ({ children }, ref) => {
    return (
      <div className="content-container" ref={ref}>
        {children}
      </div>
    );
  }
);

export default ContentContainer;
