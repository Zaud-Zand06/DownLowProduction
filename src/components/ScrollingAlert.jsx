import "./component_css/scrollingAlert.css";
const giftCardLink = "https://squareup.com/gift/MLWWKAFPWGTFJ/order";
const emailLink = "mailto:migle@vancouverclub.ca";

function ScrollingAlert() {
  const text = `Click here to purchase Online Gift Cards! ${"⭐"}`;
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
