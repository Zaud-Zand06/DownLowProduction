import "./component_css/header.css";
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

Header.propTypes = {
  setDisplayMenu: PropTypes.func.isRequired,
  displayMenu: PropTypes.string.isRequired,
  setScrollToTop: PropTypes.func.isRequired,
};

function HeaderOrderOnlineMUIMenu({ eastVanLink, UBCLink }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <a
        id="orderOnlineMenuButton"
        aria-controls={open ? "orderOnlineMenu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Order Pickup
      </a>
      <Menu
        id="orderOnlineMenu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "orderOnlineMenuButton",
        }}
      >
        <MenuItem>
          <a target="_blank" href={eastVanLink} onClick={() => handleClose()}>
            DL East Van
          </a>
        </MenuItem>
        <MenuItem>
          <a target="_blank" href={UBCLink} onClick={() => handleClose()}>
            DL UBC
          </a>
        </MenuItem>
      </Menu>
    </>
  );
}

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
        <HeaderOrderOnlineMUIMenu eastVanLink={eastVanLink} UBCLink={UBCLink} />
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
        <a
          onClick={() => {
            setDisplayMenu("catering");
            setScrollToTop(true);
          }}
        >
          Catering
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
