import "./component_css/header.css";
import { useState, useEffect, useRef } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useLocation } from "react-router-dom";

function HeaderOrderOnlineMUIMenu({ eastVanLink, UBCLink, giftCardLink }) {
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
        <MenuItem>
          <a target="_blank" href={giftCardLink} onClick={() => handleClose()}>
            Online Gift Cards
          </a>
        </MenuItem>
      </Menu>
    </>
  );
}

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const headerRef = useRef(null);
  const location = useLocation();

  const eastVanLink = "https://dl-chicken-east-vancouver.square.site/";
  const UBCLink = "https://dl-chicken-ubc.square.site/";
  const giftCardLink = "https://squareup.com/gift/MLWWKAFPWGTFJ/order";

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
        <h1 id="redLogo">
          {location.pathname !== "/secret" && <Link to="/secret">Chicken</Link>}
          {location.pathname === "/secret" && <Link to="/">Home</Link>}
        </h1>
      </div>
      <div className="hamburgerMenuButtons">
        <HeaderOrderOnlineMUIMenu
          eastVanLink={eastVanLink}
          UBCLink={UBCLink}
          giftCardLink={giftCardLink}
        />
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
        {/* some serious wizardy, checks which path the header is currently on, and displays the necessary buttons */}
        {(() => {
          const navigationConfig = {
            "/": [
              { to: "/catering", label: "Catering" },
              { to: "/menu", label: "Menu" },
            ],
            "/secret": [
              { to: "/catering", label: "Catering" },
              { to: "/menu", label: "Menu" },
            ],
            "/kits": [
              { to: "/", label: "Home" },
              { to: "/catering", label: "Catering" },
              { to: "/menu", label: "Menu" },
            ],
            "/catering": [
              { to: "/", label: "Home" },
              { to: "/menu", label: "Menu" },
            ],
            "/menu": [
              { to: "/catering", label: "Catering" },
              { to: "/", label: "Home" },
            ],
            "/events": [
              { to: "/catering", label: "Catering" },
              { to: "/menu", label: "Menu" },
              { to: "/", label: "Home" },
            ],
          };

          const currentNavigation = navigationConfig[location.pathname] || [];

          return currentNavigation.map(({ to, label }) => (
            <Link key={to} to={to}>
              {label}
            </Link>
          ));
        })()}
      </div>
    </div>
  );
}

export default Header;
