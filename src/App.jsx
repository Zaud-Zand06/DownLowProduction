import "./App.css";
import { useState, useEffect } from "react";
import "./components/component_css/backgroundImage.css";
import HeroContent from "./components/HeroContent";
import Header from "./components/Header";
import ScrollingAlert from "./components/ScrollingAlert";
import ParallaxSection from "./components/ParallaxSection";
import Footer from "./components/Footer";
import PopUpEvents from "./components/PopUpEvents";

function App() {
  const [isModalOpen, setModalOpen] = useState(true);
  const handleClose = () => setModalOpen(false);

  return (
    <>
      <PopUpEvents isOpen={isModalOpen} onClose={handleClose} />
      <Header role="banner" />

      <div className="backgroundImage"></div>

      <HeroContent />

      <ScrollingAlert />

      <ParallaxSection />

      <Footer role="region" />
    </>
  );
}

export default App;
