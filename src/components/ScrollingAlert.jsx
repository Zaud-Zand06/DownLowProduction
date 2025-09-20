import "./component_css/scrollingAlert.css";
const giftCardLink = "https://squareup.com/gift/MLWWKAFPWGTFJ/order";

function ScrollingAlert() {
  const text = `Click Here to Purchase Gift Cards! ${"⭐"}`;
  const repetitions = 10;
  const repeatedText = Array(repetitions).fill(text).join(" ");

  return (
    <div className="scrollContainer">
      <div className="horizontalScrollingItems">
        <div className="horizontalScrollingItemsItems">
          <a target="_blank" href={giftCardLink}>
            {repeatedText}
          </a>
        </div>
        <div className="horizontalScrollingItemsItems">
          <a target="_blank" href={giftCardLink}>
            {repeatedText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ScrollingAlert;
