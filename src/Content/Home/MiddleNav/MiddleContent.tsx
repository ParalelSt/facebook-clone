import { useMemo } from "react";
import ImageCarousel from "../../../Global/components/Image Carousel/ImageCarousel";
import { ContactI } from "../RightSideNav/RightSideNav";
import "./MiddleContent.scss";

export interface carouselData {
  username: string;
  profilePicture: string;
  image: string;
  userId: string;
  id: string;
}

function MiddleContent({ contactList }: ContactI) {
  const carouselData: carouselData[] = useMemo(() => {
    return contactList.flatMap((contact) => ({
      username: contact.username,
      profilePicture: contact.image,
      image: "/images/post/R34.jpg",
      userId: contact.id,
      id: contact.id,
    }));
  }, [contactList]);

  return (
    <div className="middle-content-container">
      <ImageCarousel carouselData={carouselData}></ImageCarousel>
    </div>
  );
}

export default MiddleContent;
