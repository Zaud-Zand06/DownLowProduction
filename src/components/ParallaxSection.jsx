import { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import vid1 from "../assets/downLowPromoVid1.mp4";
import vid2 from "../assets/downLowPromoVid2.mp4";

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
      <div className="aboutUs">
        <Parallax speed={-60} style={{ position: "relative", zIndex: 3 }}>
          <p className="parallaxText">
            Since our inception, Down Low Chicken has been commited to providing
            the best Nashville style fried chicken you can get. To do this we
            start with the highest quality ingredients, from our chicken down to
            our pickles.
          </p>
        </Parallax>
        <Parallax
          speed={20}
          rotateY={[360, 0]}
          style={{ position: "relative" }}
        >
          <video
            autoPlay={true}
            muted={true}
            loop={true}
            width={450}
            src={vid1}
          ></video>
        </Parallax>
      </div>
      <div className="locationContact">
        <Parallax speed={-30} style={{ position: "relative", zIndex: 3 }}>
          <p className="parallaxText2">
            Get in touch with us at number or email!
          </p>
        </Parallax>
        {sectionWidth > 700 && (
          <Parallax
            speed={40}
            rotateY={[0, 360]}
            style={{ position: "relative" }}
          >
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              width={450}
              src={vid2}
            ></video>
          </Parallax>
        )}
      </div>
    </div>
  );
}

export default ParallaxSection;
