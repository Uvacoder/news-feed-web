import { Dropdown, DropdownButton } from "react-bootstrap";
import { feedInfo } from "../constants/RssFeedInfo";

function NewsDropDown(props) {
  return (
    <DropdownButton id="dropdown-basic-button" title="Select Topic">
      {feedInfo.map((feed) => {
        return (
          <Dropdown.Item
            key={feed.id}
            onClick={() => props.handleTopicSelection(feed)}
          >
            {feed.feedName}
          </Dropdown.Item>
        );
      })}
    </DropdownButton>
  );
}

export default NewsDropDown;
