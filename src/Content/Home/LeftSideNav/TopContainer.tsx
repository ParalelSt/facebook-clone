import Accordion from "../../../Global/components/Accordion/Accordion";

export type AccordionItem = {
  id: number;
  image: string;
  title: string;
};

function TopContainer() {
  const leftTopSideNav: AccordionItem[] = [
    {
      title: "Ads Manager",
      image: "/icons/AdsManager.svg",
      id: 1,
    },

    {
      title: "Climate Science Center",
      image: "/icons/ClimateScienceCenter.svg",
      id: 2,
    },

    {
      title: "Events",
      image: "/icons/Events.svg",
      id: 3,
    },

    {
      title: "Feeds",
      image: "/icons/Feeds.svg",
      id: 4,
    },

    {
      title: "Fundraisers",
      image: "/icons/Fundraisers.svg",
      id: 5,
    },

    {
      title: "Gaming Video",
      image: "/icons/GamingVideo.svg",
      id: 6,
    },

    {
      title: "Marketplace",
      image: "/icons/Marketplace.svg",
      id: 7,
    },

    {
      title: "Messenger",
      image: "/icons/Messenger.svg",
      id: 8,
    },

    {
      title: "Orders and payments",
      image: "/icons/OrdersAndPayments.svg",
      id: 9,
    },

    {
      title: "Pages",
      image: "/icons/Pages.svg",
      id: 10,
    },

    {
      title: "Play games",
      image: "/icons/PlayGames.svg",
      id: 11,
    },

    {
      title: "Recent ad activity",
      image: "/icons/RecentAdActivity.svg",
      id: 12,
    },
  ];

  return (
    <>
      <div className="top-container">
        <div className="item-container profile">
          <img src="/images/ProfilePicture.jpg" />
          <span className="title">Aron Matoić</span>
        </div>

        <div className="item-container">
          <img className="friends" src="/icons/GroupI.svg" />
          <span className="title">Friends</span>
        </div>

        <div className="item-container">
          <img className="memories" src="/icons/HistoryI.svg" />
          <span className="title">Memories</span>
        </div>

        <div className="item-container">
          <img className="saved" src="/icons/SavedI.svg" />
          <span className="title">Saved</span>
        </div>

        <div className="item-container">
          <img className="groups" src="/icons/GroupsI.svg" />
          <span className="title">Groups</span>
        </div>

        <div className="item-container">
          <img className="video" src="/icons/VideoI.svg" />
          <span className="title">Video</span>
        </div>

        <Accordion items={leftTopSideNav}></Accordion>
      </div>
    </>
  );
}

export default TopContainer;
