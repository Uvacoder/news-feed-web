import RSSParser from "rss-parser";

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export const getFeedListing = (url) => {
  let parser = new RSSParser();
  return parser.parseURL(CORS_PROXY + url);
};
