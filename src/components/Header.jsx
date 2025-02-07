import "./component_css/header.css";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

Header.propTypes = {
  setDisplayMenu: PropTypes.func.isRequired,
  displayMenu: PropTypes.string.isRequired,
  setScrollToTop: PropTypes.func.isRequired,
};

function Header({ setDisplayMenu, displayMenu, setScrollToTop }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);

  const eastVanLink = "https://dl-chicken-east-vancouver.square.site/";
  const UBCLink = "https://dl-chicken-ubc.square.site/";

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      const threshold = 25; // Adjust this value to set the sensitivity
      const headerHeight = headerRef.current.offsetHeight;

      if (
        Math.abs(window.scrollY - lastScrollY) >= threshold &&
        window.scrollY > headerHeight
      ) {
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      ref={headerRef}
      className={`header ${isVisible ? "visible" : "hidden"}`}
    >
      <div id="logo">
        <h1>DownLow</h1>
        <h1
          id="redLogo"
          onClick={() => {
            setDisplayMenu("secret");
            setScrollToTop(true);
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
              .getElementById("locationAndMap")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Get in Touch
        </a>
        {["menu", "credits", "catering"].includes(displayMenu) && (
          <a
            onClick={() => {
              setDisplayMenu("home");
              setScrollToTop(true);
            }}
          >
            Home
          </a>
        )}

        {displayMenu == "secret" && (
          <a
            onClick={() => {
              setDisplayMenu("menu");
              setScrollToTop(true);
            }}
          >
            Standard Menu
          </a>
        )}
        {displayMenu == "home" && (
          <a
            onClick={() => {
              setDisplayMenu("menu");
              setScrollToTop(true);
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
