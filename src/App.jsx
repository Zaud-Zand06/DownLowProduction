import "./App.css";
import "./components/component_css/backgroundImage.css";
import { useState } from "react";
import HeroCarousel from "./components/HeroCarousel";
import Header from "./components/Header";
import ScrollingAlert from "./components/ScrollingAlert";
import ParallaxSection from "./components/ParallaxSection";
import Menu from "./components/Menu";
import SecretMenu from "./components/SecretMenu";
import LocationsMap from "./components/LocationsMap";
import Credits from "./components/Credits";

function App() {
  const [displayMenu, setDisplayMenu] = useState("home");

  return (
    <>
      <Header setDisplayMenu={setDisplayMenu} displayMenu={displayMenu} />
      <div className="backgroundImage"></div>
      {/* main page */}
      {displayMenu == "home" && (
        <>
          <HeroCarousel />

          <ScrollingAlert />

          <ParallaxSection />

          <LocationsMap />
        </>
      )}
      {/* secret menu display */}
      {displayMenu == "secret" && (
        <>
          <SecretMenu />
        </>
      )}
      {/* menu display */}
      {displayMenu == "menu" && (
        <>
          <Menu setDisplayMenu={setDisplayMenu} />
        </>
      )}
      {/* credits display */}
      {displayMenu == "credits" && (
        <>
          <Credits />
        </>
      )}
    </>
  );
}

export default App;
