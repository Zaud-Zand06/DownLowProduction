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
        <h1>Down Low</h1>
        <h1
          id="redLogo"
          onClick={() => {
            setDisplayMenu("home");
          }}
        >
          <a>Chicken</a>
        </h1>
      </div>
      <div className="hamburgerMenuButtons">
        {displayMenu == "menu" && (
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
        <a href={UBCLink} target="_blank">
          UBC Ordering
        </a>
        <a href={eastVanLink} target="_blank">
          East Van Ordering
        </a>
      </div>
    </div>
  );
}

export default Header;
