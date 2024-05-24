import "./App.css";
import { useState } from "react";
import HeroCarousel from "./components/HeroCarousel";
import { Parallax } from "react-scroll-parallax";
import { Drawer } from "@mui/material";

function App() {
  const [displayMenu, setDisplayMenu] = useState(false);
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
              <a href="">Menu</a>
              <a href="">Catering</a>
            </div>
          </Drawer>
        </>
      </div>

      {displayMenu == true && (
        <>
          <div className="menu">
            <a href="">Home</a>
            <a href="">Menu</a>
            <a href="">About Us</a>
            <a href="">Contact</a>
          </div>
        </>
      )}

      {displayMenu == false && (
        <>
          <HeroCarousel />

          <div className="scrollContainer">
            <div className="horizontalScrollingItems">
              <div className="horizontalScrollingItemsItems">
                We Now Do Catering! We Now Do Catering! We Now Do Catering! We
                Now Do Catering! We Now Do Catering! We Now Do Catering!
              </div>
              <div className="horizontalScrollingItemsItems">
                We Now Do Catering! We Now Do Catering! We Now Do Catering! We
                Now Do Catering! We Now Do Catering! We Now Do Catering!
              </div>
            </div>
          </div>

          <div className="parallaxContainer">
            <div className="aboutUs">
              <Parallax speed={-40} style={{ position: "relative", zIndex: 3 }}>
                <div>info about us</div>
              </Parallax>
              <Parallax speed={20} style={{ position: "relative", zIndex: 1 }}>
                <video
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  width={450}
                  src="/src/assets/downLowPromoVid1.mp4"
                ></video>
              </Parallax>
            </div>
            <div className="locationContact">
              <Parallax speed={-20} style={{ position: "relative", zIndex: 3 }}>
                <div>info about the contacts and locations</div>
              </Parallax>
              <Parallax speed={40} style={{ position: "relative", zIndex: 1 }}>
                <video
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  width={450}
                  src="/src/assets/downLowPromoVid2.mp4"
                ></video>
              </Parallax>
            </div>
          </div>
          <Parallax speed={10} style={{ position: "relative", zIndex: 5 }}>
            <iframe
              className="mapEmbed"
              src="https://storage.googleapis.com/maps-solutions-umrctwt8ee/locator-plus/jrgd/locator-plus.html"
              loading="lazy"
            ></iframe>
          </Parallax>
        </>
      )}
    </>
  );
}

export default App;
