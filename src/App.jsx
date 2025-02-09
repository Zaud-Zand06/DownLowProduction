import "./App.css";
import "./components/component_css/backgroundImage.css";
import { useState, useEffect, lazy, Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import logo from "./assets/the_logo.webp";

const HeroCarousel = lazy(() => import("./components/HeroCarousel"));
const ScrollingAlert = lazy(() => import("./components/ScrollingAlert"));
const ParallaxSection = lazy(() => import("./components/ParallaxSection"));
const Menu = lazy(() => import("./components/Menu"));
const SecretMenu = lazy(() => import("./components/SecretMenu"));
const Catering = lazy(() => import("./components/Catering"));
const Credits = lazy(() => import("./components/Credits"));

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
        role="banner"
        setScrollToTop={setScrollToTop}
      />

      <div className="backgroundImage"></div>

      <Suspense
        fallback={
          <div id="loadingScreen">
            {window.scrollTo({ top: 0, behavior: "smooth" })}
            <img src={logo} />
            <p>The Chickens are loading...</p>
          </div>
        }
      >
        {displayMenu == "home" && (
          <>
            <HeroCarousel role="main" />
            <ScrollingAlert />
            <ParallaxSection />
          </>
        )}
        {displayMenu == "secret" && <SecretMenu role="main" />}
        {displayMenu == "menu" && <Menu role="main" />}
        {displayMenu == "catering" && <Catering role="main" />}
        {displayMenu == "credits" && <Credits role="main" />}
      </Suspense>
      <Footer
        setDisplayMenu={setDisplayMenu}
        setScrollToTop={setScrollToTop}
        role="region"
      />
    </>
  );
}

export default App;
