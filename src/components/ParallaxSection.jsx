import { Parallax } from "react-scroll-parallax";
import agrodulce4 from "../assets/AgroDulce4.jpg";
import turkeyDLF from "../assets/TurkeyDLF.jpg";

function ParallaxSection() {
  return (
    <div className="parallaxContainer">
      <Parallax speed={30} style={{ position: "relative", zIndex: 3 }}>
        <p className="parallaxText">
          Since our inception, Down Low Chicken has been commited to providing
          the best Nashville style fried chicken Vancouver has ever seen!
        </p>
      </Parallax>
      <Parallax speed={20} style={{ position: "relative" }}>
        <img className="parallaxImage" src={agrodulce4} />
      </Parallax>
      <Parallax speed={50} style={{ position: "relative", zIndex: 3 }}>
        <p className="parallaxText2">
          We do this by sourcing the highest quality chicken and ingredients we
          can get our hands on, and hours of time in the kitchen creating the
          perfect blend of spices.
        </p>
      </Parallax>
      <Parallax speed={20} style={{ position: "relative" }}>
        <img className="parallaxImage2" src={turkeyDLF} />
      </Parallax>
      <Parallax speed={50}>
        <p className="parallaxText3">
          Let us know about any allergies or dietary restrictions you may have,
          and we'll do our best to accommodate you!
        </p>
      </Parallax>
    </div>
  );
}

export default ParallaxSection;
