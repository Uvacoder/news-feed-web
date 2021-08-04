import { Dropdown, DropdownButton } from "react-bootstrap";

function NewsDropDown(props) {
  return (
    <DropdownButton id="dropdown-basic-button" title="Select Topic">
      {props.topics.map((feed) => {
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
