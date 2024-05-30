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
      <Parallax speed={-100} style={{ position: "relative", zIndex: 3 }}>
        <p className="parallaxText">
          Since our inception, Down Low Chicken has been commited to providing
          the best Nashville style fried chicken Vancouver has ever seen!
        </p>
      </Parallax>
      <Parallax speed={20} rotateY={[360, 0]} style={{ position: "relative" }}>
        <img className="parallaxImage" src={logo} />
      </Parallax>
      <Parallax speed={80} style={{ position: "relative", zIndex: 3 }}>
        <p className="parallaxText2">
          We do this by sourcing the highest quality chicken and ingredients we
          can get our hands on, and hours of time in the kitchen creating the
          perfect blend of spices.
        </p>
      </Parallax>
      <Parallax speed={40} rotateY={[0, 360]} style={{ position: "relative" }}>
        <img className="parallaxImage2" src={logo} />
      </Parallax>
      <Parallax speed={30}>
        <p className="parallaxText3">
          Did you know we do catering too? Contact Sydney at (123)123-1234 or
          Email her at email.com for more information!
        </p>
      </Parallax>
    </div>
  );
}

export default ParallaxSection;
