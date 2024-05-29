import "./App.css";
import "./components/backgroundImage.css";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import HeroCarousel from "./components/HeroCarousel";
import Header from "./components/Header";
import ScrollingAlert from "./components/ScrollingAlert";
import ParallaxSection from "./components/ParallaxSection";
import Menu from "./components/Menu";

function App() {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <>
      <Header setDisplayMenu={setDisplayMenu} displayMenu={displayMenu} />
      <div className="backgroundImage"></div>

      {/* menu display */}
      {displayMenu == true && (
        <>
          <Menu />
        </>
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
