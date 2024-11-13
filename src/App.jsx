import "./App.css";
import "./components/component_css/backgroundImage.css";
import { useState, useEffect } from "react";
import HeroCarousel from "./components/HeroCarousel";
import Header from "./components/Header";
import ScrollingAlert from "./components/ScrollingAlert";
import ParallaxSection from "./components/ParallaxSection";
import Menu from "./components/Menu";
import SecretMenu from "./components/SecretMenu";
import Footer from "./components/Footer";
import Catering from "./components/Catering";
import Credits from "./components/Credits";

function App() {
  const [displayMenu, setDisplayMenu] = useState("home");
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setScrollToTop(false);
    }
  }, [scrollToTop]);

  return (
    <>
      <Header
        setDisplayMenu={setDisplayMenu}
        displayMenu={displayMenu}
        setScrollToTop={setScrollToTop}
      />

      <div className="backgroundImage"></div>
      {/* main page */}
      {displayMenu == "home" && (
        <>
          <HeroCarousel />

          <ScrollingAlert />

          <ParallaxSection />
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
          <Menu />
        </>
      )}
      {/* catering display */}
      {displayMenu == "catering" && (
        <>
          <Catering />
        </>
      )}
      {/* credits display */}
      {displayMenu == "credits" && (
        <>
          <Credits />
        </>
      )}
      <Footer setDisplayMenu={setDisplayMenu} setScrollToTop={setScrollToTop} />
    </>
  );
}

export default App;
