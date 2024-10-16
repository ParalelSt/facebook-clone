import { FaImage } from "react-icons/fa6";
import "Global/components/Image Carousel/CreateStoryMiddle.scss";

interface CreateStoryMiddleProps {
  setImage: (image: string | null) => void;
  storyItemsVisible: boolean;
  setStoryItemsVisible: (storyItemsVisible: boolean) => void;
}

const CreateStoryMiddle = ({
  setImage,
  storyItemsVisible,
  setStoryItemsVisible,
}: CreateStoryMiddleProps) => {
  const TextIcon = () => (
    <div style={{ fontWeight: "bold", fontSize: "20px", color: "black" }}>
      Aa
    </div>
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setImage(imageUrl);
      };
      reader.readAsDataURL(file);

      setStoryItemsVisible(true);
    }
  };

  return (
    <div className="create-story-middle">
      {!storyItemsVisible && (
        <div className="create-story-middle-cards">
          <div className="card left-card">
            <input
              className="image-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
            <div className="icon-container">
              <FaImage size={22} color="black" />
            </div>
            <span className="card-text">Create a photo story</span>
          </div>
          <div className="card right-card">
            <div className="icon-container">
              <TextIcon></TextIcon>
            </div>
            <span className="card-text">Create a text story</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateStoryMiddle;
