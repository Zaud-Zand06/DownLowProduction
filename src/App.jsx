import "./App.css";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import HeroCarousel from "./components/HeroCarousel";
import Header from "./components/Header";
import ScrollingAlert from "./components/ScrollingAlert";
import ParallaxSection from "./components/ParallaxSection";

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

          <ParallaxSection />

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
