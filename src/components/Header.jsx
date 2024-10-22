import "./component_css/header.css";
import PropTypes from "prop-types";

Header.propTypes = {
  setDisplayMenu: PropTypes.func.isRequired,
  displayMenu: PropTypes.string.isRequired,
};

function Header({ setDisplayMenu, displayMenu }) {
  // const giftCardLink = "https://squareup.com/gift/MLWWKAFPWGTFJ/order";
  const eastVanLink = "https://dl-chicken-east-vancouver.square.site/";
  const UBCLink = "https://dl-chicken-ubc.square.site/";

  return (
    <div className="header">
      <div id="logo">
        <h1>DownLow</h1>
        <h1
          id="redLogo"
          onClick={() => {
            setDisplayMenu("credits");
          }}
        >
          <a>Chicken</a>
        </h1>
      </div>
      <div className="hamburgerMenuButtons">
        <a
          target="_blank"
          onClick={() => {
            document
              .getElementById("mapSection")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Locations
        </a>
        <a href={eastVanLink} target="_blank">
          East Van Ordering
        </a>
        <a href={UBCLink} target="_blank">
          UBC Ordering
        </a>
        {displayMenu == "menu" && (
          <a
            onClick={() => {
              setDisplayMenu("home");
            }}
          >
            Home
          </a>
        )}
        {displayMenu == "credits" && (
          <a
            onClick={() => {
              setDisplayMenu("home");
            }}
          >
            Home
          </a>
        )}
        {displayMenu == "secret" && (
          <a
            onClick={() => {
              setDisplayMenu("menu");
            }}
          >
            Standard Menu
          </a>
        )}
        {displayMenu == "home" && (
          <a
            onClick={() => {
              setDisplayMenu("menu");
            }}
          >
            Menu
          </a>
        )}
      </div>
    </div>
  );
}

export default Header;
