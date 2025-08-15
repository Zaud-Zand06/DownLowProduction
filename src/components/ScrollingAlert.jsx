import "./component_css/scrollingAlert.css";
import { Link } from "react-router-dom";
const instaLink =
  "https://www.instagram.com/dlchicken?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

function ScrollingAlert() {
  const text = `Click Here For Information About Kits!`;
  const repetitions = 10;
  const repeatedText = Array(repetitions).fill(text).join(" ");

  return (
    <div className="scrollContainer">
      <div className="horizontalScrollingItems">
        <div className="horizontalScrollingItemsItems">
          <Link to={"/kits"}>{repeatedText}</Link>
        </div>
        <div className="horizontalScrollingItemsItems">
          <Link to={"/kits"}>{repeatedText}</Link>
        </div>
      </div>
    </div>
  );
}

export default ScrollingAlert;
