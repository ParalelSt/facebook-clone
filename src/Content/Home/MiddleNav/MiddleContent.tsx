import { useMemo } from "react";
import ImageCarousel from "../../../Global/components/Image Carousel/ImageCarousel";
import { ContactI } from "../RightSideNav/RightSideNav";
import "./MiddleContent.scss";

export interface carouselData {
  username: string;
  profilePicture: string;
  image: string;
  userId: number;
  id: number;
}

function MiddleNav({ contactList }: ContactI) {
  const carouselData: carouselData[] = useMemo(() => {
    return contactList.map((contact) => ({
      username: contact.username,
      profilePicture: contact.image,
      image: "/images/ProfilePicture.jpg",
      userId: contact.id,
      id: Math.random() * 100,
    }));
  }, [contactList]);

  return (
    <div className="middle-content-container">
      <ImageCarousel carouselData={carouselData}></ImageCarousel>
    </div>
  );
}

export default MiddleNav;
