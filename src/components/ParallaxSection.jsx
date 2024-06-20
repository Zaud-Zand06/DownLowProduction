import "./component_css/parallaxSection.css";
import { Parallax } from "react-scroll-parallax";
import agrodulce4 from "../assets/AgroDulce4.jpg";
import turkeyDLF from "../assets/TurkeyDLF.jpg";

function ParallaxSection() {
  return (
    <div className="parallaxContainer">
      <Parallax speed={30} style={{ position: "relative", zIndex: 3 }}>
        <p className="parallaxText">
          Since our inception, Down Low Chicken has been commited to providing
          the best Nashville style fried chicken Vancouver has to offer!
        </p>
      </Parallax>
      <Parallax speed={-10} style={{ position: "relative" }}>
        <img className="parallaxImage" src={agrodulce4} />
      </Parallax>
      <Parallax speed={30} style={{ position: "relative", zIndex: 3 }}>
        <p className="parallaxText2">
          From our juicy fried chicken to our custom dessert cups, we only
          source the highest quality and local ingredients for our recipes.
        </p>
      </Parallax>
      <Parallax speed={20} style={{ position: "relative", zIndex: 3 }}>
        <p className="parallaxText3">
          Our fresh BC chicken is provided to us by Legends Haul, a halal
          certified supplier that shares our commitment to quality and our
          attention to detail.
        </p>
      </Parallax>
      <Parallax speed={-10} style={{ position: "relative" }}>
        <img className="parallaxImage2" src={turkeyDLF} />
      </Parallax>
      <Parallax speed={30} style={{ position: "relative", zIndex: 3 }}>
        <p className="parallaxText3">
          And yes, we can accomodate for all dietary restrictions! Come in and
          ask us what we can do for you!
        </p>
      </Parallax>
    </div>
  );
}

export default ParallaxSection;
