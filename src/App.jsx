import "./App.css";
import "./components/component_css/backgroundImage.css";
import HeroCarousel from "./components/HeroCarousel";
import Header from "./components/Header";
import ScrollingAlert from "./components/ScrollingAlert";
import ParallaxSection from "./components/ParallaxSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header role="banner" />

      <div className="backgroundImage"></div>

      <HeroCarousel role="main" />

      <ScrollingAlert />

      <ParallaxSection />

      <Footer role="region" />
    </>
  );
}

export default App;
