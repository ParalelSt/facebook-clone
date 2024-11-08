import "Content/Video/MiddleContent/ViewsDisplay.scss";

interface ViewDisplayProps {
  viewCount: number;
}

const ViewsDisplay = ({ viewCount }: ViewDisplayProps) => {
  return (
    <div className="views-display">
      {viewCount > 0 && (
        <div className="view-display">
          <p className="view-count">
            {viewCount > 999
              ? viewCount.toString().slice(0, -3) + "K"
              : viewCount}
            {""} views
          </p>
        </div>
      )}
    </div>
  );
};

export default ViewsDisplay;
