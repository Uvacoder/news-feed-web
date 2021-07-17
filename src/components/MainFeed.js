import React, { useState, useEffect } from "react";
import { feedInfo } from "../constants/RssFeedInfo";
import { getFeedListing } from "../helpers/Requests";
import FeedItem from "./FeedItem";
import NewsDropDown from "./NewsDropDown";
//import "./MainFeed.css";

function MainFeed() {
  const [loaded, setLoaded] = useState(false);
  const [listings, setListings] = useState([]);
  const [feedMeta, setFeedMeta] = useState({});

  const getFeedData = async (topic) => {
    const response = await getFeedListing(topic.feedLink);
    //console.log(response);

    setFeedMeta(response.data.feed);
    setListings(response.data.items);
  };

  useEffect(() => {
    if (!loaded) {
      getFeedData(feedInfo[0]);
      setLoaded(true);
    }
  });

  const topicSelectionHandler = (topic, e) => {
    //console.log(topic);
    getFeedData(topic);
  };

  return (
    <React.Fragment>
      <NewsDropDown handleTopicSelection={topicSelectionHandler} />
      <div>
        <h2>{feedMeta.title}</h2>
        {listings.map((l, i) => {
          return <FeedItem key={i} item={l} />;
        })}
      </div>
    </React.Fragment>
  );
}

export default MainFeed;
