import "./App.css";
import { useState } from "react";
import HeroCarousel from "./components/HeroCarousel";
import { Parallax } from "react-scroll-parallax";
import Header from "./components/Header";
import ScrollingAlert from "./components/ScrollingAlert";

function App() {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <>
      <Header setDisplayMenu={setDisplayMenu} displayMenu={displayMenu} />

      {/* menu display */}
      {displayMenu == true && (
        <div className="menu">this is where the menu is gonna be chilling</div>
      )}

      {/* main page */}
      {displayMenu == false && (
        <>
          <HeroCarousel />

          <ScrollingAlert />

          <div className="parallaxContainer">
            <div className="aboutUs">
              <Parallax speed={-60} style={{ position: "relative", zIndex: 3 }}>
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
