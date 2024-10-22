import "./component_css/header.css";
import PropTypes from "prop-types";

Header.propTypes = {
  setDisplayMenu: PropTypes.func.isRequired,
  displayMenu: PropTypes.string.isRequired,
};

function Header({ setDisplayMenu, displayMenu }) {
  const eastVanLink = "https://dl-chicken-east-vancouver.square.site/";
  const UBCLink = "https://dl-chicken-ubc.square.site/";

  return (
    <div className="header">
      <div id="logo">
        <h1>DownLow</h1>
        <h1
          id="redLogo"
          onClick={() => {
            setDisplayMenu("secret");
          }}
        >
          <a>Chicken</a>
        </h1>
      </div>
      <div className="hamburgerMenuButtons">
        <a href={eastVanLink} target="_blank">
          East Van Ordering
        </a>
        <a href={UBCLink} target="_blank">
          UBC Ordering
        </a>
        <a
          target="_blank"
          onClick={() => {
            document
              .getElementById("mapSection")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get in Touch
        </a>
        {["menu", "credits", "catering"].includes(displayMenu) && (
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
