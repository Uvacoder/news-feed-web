function FeedItemDate(props) {
  const { date } = props;

  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div>
      <div>{month}, {day} {year}</div>
    </div>
  );
}

export default FeedItemDate;
