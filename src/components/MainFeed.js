import FeedItem from "./FeedItem";
import "./MainFeed.css";

function MainFeed() {
  const feedItems = [
    {
      id: "1",
      title: "Canada visa",
      date: new Date(2021, 5, 28)
    },
    {
      id: "2",
      title: "Canada is now open..",
      date: new Date(2021, 5, 29)
    },
    {
      id: "3",
      title: "Canada welcomes you!",
      date: new Date(2021, 5, 30)
    }
  ];
  return (
    <div className="main-feed">
      <FeedItem item={feedItems[0]} />
      <FeedItem item={feedItems[1]} />
      <FeedItem item={feedItems[2]} />
    </div>
  );
}

export default MainFeed;
