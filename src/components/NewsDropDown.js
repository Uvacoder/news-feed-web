import { Dropdown, DropdownButton } from "react-bootstrap";

function NewsDropDown(props) {
  const title = "Select " + props.topicName;

  return (
    <DropdownButton id="dropdown-basic-button" title={title}>
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
