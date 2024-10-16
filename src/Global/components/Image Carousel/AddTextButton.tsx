import "Global/components/Image Carousel/AddTextButton.scss";

const AddTextButton = () => {
  const TextIcon = () => (
    <div style={{ fontWeight: "bold", fontSize: "20px", color: "black" }}>
      Aa
    </div>
  );

  return (
    <div className="add-text-button-container">
      <button className="add-text-button">
        <div className="icon-container">
          <TextIcon></TextIcon>
        </div>
        <span>Add text</span>
      </button>
    </div>
  );
};

export default AddTextButton;
