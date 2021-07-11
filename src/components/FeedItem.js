import { Media } from "react-bootstrap";

//import "./FeedItem.css";
import FeedItemDate from "./FeedItemDate";

function FeedItem(props) {
  const { item } = props;

  const month = item.date.toLocaleString("en-US", { month: "long" });
  const day = item.date.toLocaleString("en-US", { day: "2-digit" });
  const year = item.date.getFullYear();

  return (
    <Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src="pexels-drone-trotter-6678139.jpg"
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>{props.item.title}</h5>
    <FeedItemDate date={item.date} />
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
    </p>
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
