import { FaImage } from "react-icons/fa6";
import "Global/components/Image Carousel/CreateStoryMiddle.scss";
import { useEffect, useRef } from "react";

interface CreateStoryMiddleProps {
  setImage: (image: string | null) => void;
  storyItemsVisible: boolean;
  setStoryItemsVisible: (storyItemsVisible: boolean) => void;
  image: string | null;
  imageInputRef: React.RefObject<HTMLInputElement>;
}

const CreateStoryMiddle = ({
  setImage,
  storyItemsVisible,
  setStoryItemsVisible,
  image,
  imageInputRef,
}: CreateStoryMiddleProps) => {
  // const [isActive, setIsActive] = useState(false);

  const handleImageEditingOpen = () => {
    setIsActive(true);
  };

  const handleImageEditingClose = (e: MouseEvent) => {
    if (imageRef.current && !imageRef.current.contains(e.target as Node)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleImageEditingClose);
    return () => {
      document.removeEventListener("mousedown", handleImageEditingClose);
    };
  }, []);

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

  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <div className="create-story-middle">
      <div
        className={`create-story-middle-cards ${
          !storyItemsVisible ? "active" : "disabled"
        }`}
      >
        <div className="card left-card">
          <input
            className="image-upload"
            ref={imageInputRef}
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

      <div
        className={`preview-display ${
          storyItemsVisible ? "active" : "disabled"
        }`}
      >
        <span className="preview-span">Preview</span>
        <div className="image-preview">
          <div
            className={`preview-img-container`}
            ref={imageRef}
            onClick={handleImageEditingOpen}
          >
            {image && <img src={image} alt="" />}
          </div>
          <div className="preview-text-container">
            <span className="">Select photo to crop and rotate</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateStoryMiddle;
