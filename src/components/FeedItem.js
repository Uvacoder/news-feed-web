import "./FeedItem.css";
import FeedItemDate from "./FeedItemDate";

function FeedItem(props) {
  const { item } = props;

  const month = item.date.toLocaleString("en-US", { month: "long" });
  const day = item.date.toLocaleString("en-US", { day: "2-digit" });
  const year = item.date.getFullYear();

  return (
    <div className="feed-item">
      <div>
        <h2>{props.item.title}</h2>
      </div>
      <div className="feed-item-image">Photo</div>

      <FeedItemDate date={item.date} />

      <div>
        <button>Bookmark</button>
      </div>
      <div>
        <button>Share</button>
      </div>
    </div>
  );
}

export default FeedItem;
