import "./component_css/parallaxSection.css";
import { Parallax } from "react-scroll-parallax";
import agrodulce4 from "../assets/AgroDulce4.jpg";
import dlInterior from "../assets/dlInterior1.jpg";
import agroduclePromo from "../assets/agrodulcePromo.jpg";

function ParallaxSection() {
  return (
    <div className="parallaxContainer">
      <Parallax className="parallaxText" speed={30}>
        <p>
          Since our inception, Down Low Chicken has been commited to providing
          the best Nashville style fried chicken Vancouver has to offer!
        </p>
      </Parallax>
      <Parallax className="parallaxImage" speed={-10}>
        <img src={dlInterior} />
      </Parallax>
      <Parallax className="parallaxText2" speed={30}>
        <p>
          From our juicy fried chicken to our custom dessert cups, we only
          source the highest quality and local ingredients for our recipes.
        </p>
      </Parallax>
      <Parallax className="parallaxText3" speed={20}>
        <p>
          Our fresh BC chicken is provided to us by Legends Haul, a halal
          certified supplier that shares our commitment to quality and our
          attention to detail.
        </p>
      </Parallax>
      <Parallax className="parallaxImage2" speed={-10}>
        <img src={agroduclePromo} />
      </Parallax>
      <Parallax className="parallaxText4" speed={30}>
        <p>
          And yes, we can accomodate for all dietary restrictions! Come in and
          ask us what we can do for you!
        </p>
      </Parallax>
    </div>
  );
}

export default ParallaxSection;
