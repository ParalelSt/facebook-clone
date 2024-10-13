import { ReactElement, useState } from "react";
import Accordion from "../../../Global/components/Accordion/Accordion";
import {
  FaCalendarAlt,
  FaGlobeAmericas,
  FaHistory,
  FaPlayCircle,
  FaUserFriends,
} from "react-icons/fa";
import {
  FaBookmark,
  FaChartBar,
  FaChartLine,
  FaFacebookMessenger,
  FaFileInvoiceDollar,
  FaFlag,
  FaGamepad,
  FaHandHoldingHeart,
  FaRss,
  FaStore,
  FaUsers,
  FaVideo,
} from "react-icons/fa6";

interface TopContainerProps {
  scrollVisibleTop: boolean;
  setScrollVisibleTop: (scrollVisibleTop: boolean) => void;
}

export type AccordionItem = {
  id: number;
  image: ReactElement | string;
  title: string;
};

function TopContainer({
  scrollVisibleTop,
  setScrollVisibleTop,
}: TopContainerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const leftTopSideNav: AccordionItem[] = [
    {
      title: "Ads Manager",
      image: (
        <FaChartBar className="ads-manager" style={{ color: "#1877F2" }} />
      ),
      id: 1,
    },

    {
      title: "Climate Science Center",
      image: (
        <FaGlobeAmericas
          className="climate-science"
          style={{ color: "#36A420" }}
        />
      ),
      id: 2,
    },

    {
      title: "Events",
      image: <FaCalendarAlt className="events" style={{ color: "#F35369" }} />,
      id: 3,
    },

    {
      title: "Feeds",
      image: <FaRss className="feeds" style={{ color: "#1877F2" }} />,
      id: 4,
    },

    {
      title: "Fundraisers",
      image: (
        <FaHandHoldingHeart
          className="fundraisers"
          style={{ color: "#FF69B4" }}
        />
      ),
      id: 5,
    },

    {
      title: "Gaming Video",
      image: (
        <FaGamepad className="gaming-video" style={{ color: "#1877F2" }} />
      ),
      id: 6,
    },

    {
      title: "Marketplace",
      image: <FaStore className="marketplace" style={{ color: "#1877F2" }} />,
      id: 7,
    },

    {
      title: "Messenger",
      image: (
        <FaFacebookMessenger
          className="messenger"
          style={{ color: "#00C6FF" }}
        />
      ),
      id: 8,
    },

    {
      title: "Orders and payments",
      image: (
        <FaFileInvoiceDollar
          className="orders-payments"
          style={{ color: "#1877F2" }}
        />
      ),
      id: 9,
    },

    {
      title: "Pages",
      image: <FaFlag className="pages" style={{ color: "#FF5700" }} />,
      id: 10,
    },

    {
      title: "Play games",
      image: (
        <FaPlayCircle className="play-games" style={{ color: "#1877F2" }} />
      ),
      id: 11,
    },

    {
      title: "Recent ad activity",
      image: (
        <FaChartLine
          className="recent-ad-activity"
          style={{ color: "#1877F2" }}
        />
      ),
      id: 12,
    },
  ];

  const currentUserString = localStorage.getItem("currentUser");
  const currentUser = currentUserString ? JSON.parse(currentUserString) : null;

  return (
    <>
      <div className="top-container">
        <div className="item-container profile">
          <img src={currentUser.profilePicture} />
          <span className="title">{currentUser.user}</span>
        </div>

        <div className="item-container">
          <FaUserFriends style={{ color: "#1877F2" }}></FaUserFriends>
          <span className="title">Friends</span>
        </div>

        <div className="item-container">
          <FaHistory style={{ color: "#1877F2" }} />
          <span className="title">Memories</span>
        </div>

        <div className="item-container">
          <FaBookmark className="saved" style={{ color: "#A020F0" }} />
          <span className="title">Saved</span>
        </div>

        <div className="item-container">
          <FaUsers className="groups" style={{ color: "#1877F2" }} />
          <span className="title">Groups</span>
        </div>

        <div className="item-container">
          <FaVideo className="video" style={{ color: "#1877F2" }} />
          <span className="title">Video</span>
        </div>

        <Accordion
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          items={leftTopSideNav}
          scrollVisible={scrollVisibleTop}
          setScrollVisible={setScrollVisibleTop}
        ></Accordion>
      </div>
    </>
  );
}

export default TopContainer;
