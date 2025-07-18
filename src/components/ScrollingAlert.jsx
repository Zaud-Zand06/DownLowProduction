import "./component_css/scrollingAlert.css";

function ScrollingAlert() {
  const text = `Click Here to see what events we have coming up!`;
  const repetitions = 10;
  const repeatedText = Array(repetitions).fill(text).join(" ");

  return (
    <div className="scrollContainer">
      <div className="horizontalScrollingItems">
        <div className="horizontalScrollingItemsItems">
          <a target="_blank">{repeatedText}</a>
        </div>
        <div className="horizontalScrollingItemsItems">
          <a target="_blank">{repeatedText}</a>
        </div>
      </div>
    </div>
  );
}

export default ScrollingAlert;
