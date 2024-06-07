import "./App.css";
import "./components/backgroundImage.css";
import { useState } from "react";
import HeroCarousel from "./components/HeroCarousel";
import Header from "./components/Header";
import ScrollingAlert from "./components/ScrollingAlert";
import ParallaxSection from "./components/ParallaxSection";
import Menu from "./components/Menu";
import LocationsMap from "./components/LocationsMap";

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

          <LocationsMap />
        </>
      )}
    </>
  );
}

export default App;
