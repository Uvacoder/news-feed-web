import { Media } from "react-bootstrap";

//import "./FeedItem.css";
import FeedItemDate from "./FeedItemDate";

function FeedItem(props) {
  const { item } = props;

  const month = item.pubDate;
  const day = item.pubDate;
  const year = item.pubDate;

  return (
    <Media>
      <img
        width={150}
        height={100}
        className="mr-3"
        src={item.thumbnail}
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>{props.item.title}</h5>
        <FeedItemDate date={item.pubDate} />
        <div>
          <a href={item.link} target="_">
            Read more
          </a>
        </div>
      </Media.Body>
    </Media>

    /* <div className="feed-item">
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
    </div> */
  );
}

export default FeedItem;
