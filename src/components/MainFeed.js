import React, { useState, useEffect } from 'react';
import { getFeedListing } from '../helpers/Requests';
import FeedItem from "./FeedItem";
//import "./MainFeed.css";

function MainFeed() {

  const [loaded, setLoaded] = useState(false);
  const [listings, setListings] = useState([]);
  const [feedMeta, setFeedMeta] = useState({});

  const getFeedData = async() => {
    const response = await getFeedListing('https://rss.cbc.ca/lineup/topstories.xml');
    console.log(response);

    setFeedMeta(response.feed);
    setListings(response.items)
  };

  useEffect(() => {
    if(!loaded) {
      getFeedData();
      setLoaded(true);
    }
  });
  

	return (
    <div>
      <h2>{feedMeta.title}</h2>
    { 
      listings.map((l,i) => {
        return(
          <FeedItem key={i} item={l} />
        );
      })
    }
    </div>
  );
}

export default MainFeed;
