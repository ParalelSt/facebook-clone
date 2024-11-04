interface ViewDisplayProps {
  viewCount: number;
}

const ViewsDisplay = ({ viewCount }: ViewDisplayProps) => {
  return (
    <div className="views-display">
      {viewCount > 0 && (
        <div className="view-display">
          <div className="view-count">{viewCount}</div>
        </div>
      )}
    </div>
  );
};

export default ViewsDisplay;
