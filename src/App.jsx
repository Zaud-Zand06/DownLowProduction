import "./App.css";
import HeroCarousel from "./components/HeroCarousel";
import { Parallax } from "react-scroll-parallax";

function App() {
  return (
    <>
      <div className="header">
        <div id="logo">
          <h1>Down Low</h1>
          <h1 id="redLogo">Chicken</h1>
        </div>
        <a href="" id="hambugerButton">
          <h1>=</h1>
        </a>
      </div>

      <HeroCarousel />

      <div className="scrollAlert">
        We Now Do Catering! We Now Do Catering! We Now Do Catering!
      </div>

      <div className="parallaxContainer">
        <Parallax speed={40}>
          <div>info about us</div>
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            width={350}
            src="/src/assets/downLowPromoVid1.mp4"
          ></video>
        </Parallax>
        <Parallax speed={20}>
          <div>info about the contacts and locations</div>
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            width={350}
            src="/src/assets/downLowPromoVid2.mp4"
          ></video>
        </Parallax>
      </div>
      <Parallax speed={10}>
        <iframe
          className="mapEmbed"
          src="https://storage.googleapis.com/maps-solutions-umrctwt8ee/locator-plus/jrgd/locator-plus.html"
          loading="lazy"
        ></iframe>
      </Parallax>
    </>
  );
}

export default App;
