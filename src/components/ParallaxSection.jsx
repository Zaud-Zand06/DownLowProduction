import { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import jinBoot from "../assets/jinBoot.jpg";
import logo from "../assets/the_logo.png";

function ParallaxSection() {
  const [sectionWidth, setSectionWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSectionWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="parallaxContainer">
      <Parallax speed={-60} style={{ position: "relative", zIndex: 3 }}>
        <p className="parallaxText">
          Since our inception, Down Low Chicken has been commited to providing
          the best Nashville style fried chicken you can get. To do this we
          start with the highest quality ingredients, from our chicken down to
          our pickles.
        </p>
      </Parallax>
      <Parallax speed={20} rotateY={[360, 0]} style={{ position: "relative" }}>
        <img src={logo} />
      </Parallax>
      <Parallax speed={-30} style={{ position: "relative", zIndex: 3 }}>
        <p className="parallaxText2">
          Get in touch with us at number or email!
        </p>
      </Parallax>
      <Parallax speed={40} rotateY={[0, 360]} style={{ position: "relative" }}>
        <img src={logo} />
      </Parallax>
      <Parallax>
        <p className="parallaxText3">
          Emails! Phone numbers! Some of this could be oved to the maps
          component, and this could be repurposed as an additional about us
          section - maybe highlighting our past collabs or sumn
        </p>
      </Parallax>
    </div>
  );
}

export default ParallaxSection;
