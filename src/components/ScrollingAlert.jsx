import "./component_css/scrollingAlert.css";
import { Link } from "react-router-dom";

function ScrollingAlert() {
  const text = `Click Here to see what events we have coming up!`;
  const repetitions = 10;
  const repeatedText = Array(repetitions).fill(text).join(" ");

  return (
    <div className="scrollContainer">
      <div className="horizontalScrollingItems">
        <div className="horizontalScrollingItemsItems">
          <Link to="/events">{repeatedText}</Link>
        </div>
        <div className="horizontalScrollingItemsItems">
          <Link to="/events">{repeatedText}</Link>
        </div>
      </div>
    </div>
  );
}

export default ScrollingAlert;
