function FeedItemDate(props) {
  const { date } = props;

  const month = new Date(date).toLocaleString("en-US", { month: "long" });
  const day = new Date(date).toLocaleString("en-US", { day: "2-digit" });
  const year = new Date(date).getFullYear();

  return (
    <div>
      <div>
        {month}, {day} {year}
      </div>
    </div>
  );
}

export default FeedItemDate;
