import { useState } from "react";
import { Drawer } from "@mui/material";
import PropTypes from "prop-types";

Header.propTypes = {
  setDisplayMenu: PropTypes.func.isRequired,
};

function Header({ setDisplayMenu }) {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  function toggleHambugerMenu() {
    setHamburgerMenu(!hamburgerMenu);
  }

  return (
    <>
      <div className="header">
        <div id="logo">
          <h1>Down Low</h1>
          <h1 id="redLogo">Chicken</h1>
        </div>
        {/* rework to a seperate module */}
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
              <a href="" target="_blank">
                East Van Ordering
              </a>
              <a href="" target="_blank">
                UBC Ordering
              </a>
              <a
                onClick={() => {
                  setDisplayMenu(true);
                }}
              >
                Menu
              </a>
              <a href="">Catering</a>
            </div>
          </Drawer>
        </>
      </div>
    </>
  );
}

export default Header;
