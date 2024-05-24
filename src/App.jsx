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

      <div className="scrollContainer">
        <div className="horizontalScrollingItems">
          <div className="horizontalScrollingItemsItems">
            We Now Do Catering! We Now Do Catering! We Now Do Catering! We Now
            Do Catering! We Now Do Catering! We Now Do Catering!
          </div>
          <div className="horizontalScrollingItemsItems">
            We Now Do Catering! We Now Do Catering! We Now Do Catering! We Now
            Do Catering! We Now Do Catering! We Now Do Catering!
          </div>
        </div>
      </div>

      <div className="parallaxContainer">
        <div className="aboutUs">
          <Parallax speed={-40} style={{ position: "relative", zIndex: 3 }}>
            <div>info about us</div>
          </Parallax>
          <Parallax speed={20} style={{ position: "relative", zIndex: 1 }}>
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              width={450}
              src="/src/assets/downLowPromoVid1.mp4"
            ></video>
          </Parallax>
        </div>
        <div className="locationContact">
          <Parallax speed={-20} style={{ position: "relative", zIndex: 3 }}>
            <div>info about the contacts and locations</div>
          </Parallax>
          <Parallax speed={40} style={{ position: "relative", zIndex: 1 }}>
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              width={450}
              src="/src/assets/downLowPromoVid2.mp4"
            ></video>
          </Parallax>
        </div>
      </div>
      <Parallax speed={10} style={{ position: "relative", zIndex: 5 }}>
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
