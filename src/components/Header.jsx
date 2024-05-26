import { useState } from "react";
import { Drawer } from "@mui/material";
import PropTypes from "prop-types";

Header.propTypes = {
  setDisplayMenu: PropTypes.func.isRequired,
  displayMenu: PropTypes.bool.isRequired,
};

function Header({ setDisplayMenu, displayMenu }) {
  const giftCardLink = "https://squareup.com/gift/MLWWKAFPWGTFJ/order";
  const eastVanLink = "https://dl-chicken-east-vancouver.square.site/";
  const UBCLink = "https://dl-chicken-ubc.square.site/";

  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  function toggleHambugerMenu() {
    setHamburgerMenu(!hamburgerMenu);
  }

  return (
    <>
      <div className="header">
        <div id="logo">
          <h1>Down Low</h1>
          <a
            id="redLogo"
            onClick={() => {
              setDisplayMenu(false);
            }}
          >
            <h1>Chicken</h1>
          </a>
        </div>
        <>
          <a
            id="hamburgerButton"
            onClick={() => {
              toggleHambugerMenu();
            }}
          >
            =
          </a>

          <Drawer
            anchor="bottom"
            elevation={0}
            PaperProps={{ sx: { backgroundColor: "#00000000" } }}
            open={hamburgerMenu}
            onClose={() => {
              setHamburgerMenu(false);
            }}
          >
            <div className="hamburgerMenuButtons">
              <a href={eastVanLink} target="_blank">
                East Van Ordering
              </a>
              <a href={UBCLink} target="_blank">
                UBC Ordering
              </a>
              {displayMenu == false && (
                <a
                  onClick={() => {
                    setDisplayMenu(true);
                  }}
                >
                  Menu
                </a>
              )}
              {displayMenu == true && (
                <a
                  onClick={() => {
                    setDisplayMenu(false);
                  }}
                >
                  Home
                </a>
              )}
              <a href="" target="_blank">
                Catering
              </a>
            </div>
          </Drawer>
        </>
      </div>
    </>
  );
}

export default Header;
