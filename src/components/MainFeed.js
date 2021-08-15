import React, { useState, useEffect } from "react";
import firebase from "../config/FirebaseConfig";

import { getFeedListing } from "../helpers/Requests";
import FeedItem from "./FeedItem";
import NewsDropDown from "./NewsDropDown";
//import "./MainFeed.css";

function MainFeed() {
  const [loaded, setLoaded] = useState(false);
  const [topics, setTopics] = useState([]);
  const [cityTopics, setCityTopics] = useState([]);
  const [listings, setListings] = useState([]);
  const [feedMeta, setFeedMeta] = useState({});

  const getTopics = () => {
    const dbRef = firebase.database().ref();
    dbRef
      .child("topics")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          let response = snapshot.val();
          console.log(response);
          setTopics(Object.values(response));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getCityTopics = () => {
    const dbRef = firebase.database().ref();
    dbRef
      .child("cities")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          let response = snapshot.val();
          console.log(response);
          setCityTopics(Object.values(response));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getFeedData = async (topic) => {
    const response = await getFeedListing(topic.feedUrl);
    console.log(response);

    setFeedMeta({ title: response.title });
    setListings(response.items);
  };

  useEffect(() => {
    console.log("Inside useEffect()");
    if (!loaded) {
      getTopics();
      getCityTopics();
      setLoaded(true);
      console.log("Topics loaded!");
    }
  }, [loaded]);

  const topicSelectionHandler = (topic, e) => {
    //console.log(topic);
    getFeedData(topic);
  };

  return (
    <React.Fragment>
      <NewsDropDown
        topicName="General Topic"
        topics={topics}
        handleTopicSelection={topicSelectionHandler}
      />
      <NewsDropDown
        topicName="Cities"
        topics={cityTopics}
        handleTopicSelection={topicSelectionHandler}
      />
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
