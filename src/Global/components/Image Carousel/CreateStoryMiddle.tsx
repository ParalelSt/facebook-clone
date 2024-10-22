import { FaImage } from "react-icons/fa6";
import "Global/components/Image Carousel/CreateStoryMiddle.scss";
import { useEffect, useMemo, useRef, useState } from "react";
import RangeSlider from "./RangeSlider";
import RotateButton from "./RotateButton";

interface CreateStoryMiddleProps {
  setImage: (image: string | null) => void;
  storyItemsVisible: boolean;
  setStoryItemsVisible: (storyItemsVisible: boolean) => void;
  image: string | null;
  imageInputRef: React.RefObject<HTMLInputElement>;
  zoomLevel: string;
  setZoomLevel: (zoomLevel: string) => void;
  imageSize: { width: number | null; height: number | null };
  setImageSize: (imageSize: {
    width: number | null;
    height: number | null;
  }) => void;
  setPostImageSize: (postImageSize: {
    width: number | null;
    height: number | null;
  }) => void;
}

const CreateStoryMiddle = ({
  setImage,
  storyItemsVisible,
  setStoryItemsVisible,
  image,
  imageInputRef,
  zoomLevel,
  setZoomLevel,
  imageSize,
  setImageSize,
  setPostImageSize,
}: CreateStoryMiddleProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageEditingOpen = () => {
    setIsExpanded(true);
  };

  const handleImageEditingClose = (e: MouseEvent) => {
    if (
      imageRef.current &&
      !imageRef.current.contains(e.target as Node) &&
      imageControlsRef.current &&
      !imageControlsRef.current.contains(e.target as Node)
    ) {
      setIsExpanded(false);
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
        const img = new Image();
        img.onload = () => {
          setImageSize({ width: img.width, height: img.height });
        };
        img.src = imageUrl;
      };
      reader.readAsDataURL(file);
      setStoryItemsVisible(true);
    }
  };

  useEffect(() => {}, [image, setImageSize]);

  const calculatedImageSize = useMemo(() => {
    const widthThreshold = 900;
    const targetWidth = 404;
    const targetHeight = 225;

    const width = imageSize.width ?? 0; // Default to 0 if null
    const height = imageSize.height ?? 0; // Default to 0 if null

    let finalWidth: number;
    let finalHeight: number;

    if (width > widthThreshold) {
      finalWidth = targetWidth + 20;
      finalHeight = targetHeight + 20;
    } else if (width < targetWidth || height < targetHeight) {
      finalWidth = 404;
      finalHeight = 722;
    } else {
      finalWidth = width;
      finalHeight = height;
    }

    const zoomFactor = parseFloat(zoomLevel) || 1; // Default to 1 if parsing fails

    return {
      width: `${finalWidth * zoomFactor}px`,
      height: `${finalHeight * zoomFactor}px`,
      transition: "width 0.3s ease, height 0.3s ease",
    };
  }, [imageSize, zoomLevel]);

  useEffect(() => {
    setPostImageSize({
      width: parseInt(calculatedImageSize.width) / 1.5,
      height: parseInt(calculatedImageSize.height) / 1.5,
    });
  }, [calculatedImageSize, setPostImageSize]);

  const imageRef = useRef<HTMLImageElement>(null);
  const imageControlsRef = useRef<HTMLImageElement>(null);

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
            className={`preview-img-background ${
              isExpanded ? "active" : "disabled"
            }`}
          ></div>
          <div
            className={`preview-img-container ${
              isExpanded ? "expanded" : "default"
            }`}
            ref={imageRef}
            onClick={handleImageEditingOpen}
          >
            <div
              className={`image-container ${
                isExpanded ? "active" : "disabled"
              }`}
            >
              {image && (
                <img
                  src={image}
                  alt="story-image"
                  style={{
                    width: calculatedImageSize.width,
                    height: calculatedImageSize.height,
                    transition: calculatedImageSize.transition,
                  }}
                />
              )}
            </div>
          </div>

          {!isExpanded && (
            <div className="preview-text-container">
              <span className="">Select photo to crop and rotate</span>
            </div>
          )}
          {isExpanded && (
            <div className="image-controls" ref={imageControlsRef}>
              <RangeSlider
                min="0.5"
                max="2"
                step="0.05"
                value={zoomLevel}
                onChange={setZoomLevel}
              ></RangeSlider>
              <RotateButton></RotateButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateStoryMiddle;
