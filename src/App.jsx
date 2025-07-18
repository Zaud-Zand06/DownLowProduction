import "./App.css";
import "./components/component_css/backgroundImage.css";
import HeroContent from "./components/HeroContent";
import Header from "./components/Header";
import ScrollingAlert from "./components/ScrollingAlert";
import ParallaxSection from "./components/ParallaxSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* re enable for prod pls!! */}
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
