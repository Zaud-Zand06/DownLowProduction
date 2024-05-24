import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function ParallaxMain() {
  return (
    <div className="mainContainerParallax">
      <div className="aboutUs">
        <Parallax pages={1} style={{ left: 0 }}>
          <ParallaxLayer
            factor={0}
            offset={0}
            speed={2.5}
            style={{ zIndex: 1 }}
          >
            <p>
              info about us and the ingredients we use and such, focus on
              quality of food and ingredients and a bit about the character of
              he restaurant
            </p>
          </ParallaxLayer>

          <ParallaxLayer
            factor={0}
            offset={0.5}
            speed={-2.5}
            style={{ zIndex: 0 }}
          >
            <video
              src="/src/assets/downLowPromoVid1.mp4"
              autoPlay={true}
              loop={true}
              muted={true}
              width={350}
            ></video>
          </ParallaxLayer>
        </Parallax>
      </div>

      <div className="locationsContact">
        <Parallax pages={1} style={{ right: 0 }}>
          <ParallaxLayer
            factor={1}
            offset={0}
            speed={2.5}
            style={{ zIndex: 1 }}
          >
            <p>info about our locations and how to get in touch with us </p>
          </ParallaxLayer>

          <ParallaxLayer
            factor={1}
            offset={0}
            speed={-2.5}
            style={{ zIndex: 0 }}
          >
            <video
              src="/src/assets/downLowPromoVid2.mp4"
              autoPlay={true}
              loop={true}
              muted={true}
              width={350}
            ></video>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}

export default ParallaxMain;
