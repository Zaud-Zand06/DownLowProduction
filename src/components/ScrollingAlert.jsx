import "./component_css/scrollingAlert.css";

const giftCardLink = "https://squareup.com/gift/MLWWKAFPWGTFJ/order";

function ScrollingAlert() {
  const text = `Online Gift cards are now available!`;
  const repetitions = 10;
  const repeatedText = Array(repetitions).fill(text).join(" ");

  return (
    <div className="scrollContainer">
      <div className="horizontalScrollingItems">
        <div className="horizontalScrollingItemsItems">
          <a href={giftCardLink} target="_blank">
            {repeatedText}
          </a>
        </div>
        <div className="horizontalScrollingItemsItems">
          <a href={giftCardLink} target="_blank">
            {repeatedText}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ScrollingAlert;
