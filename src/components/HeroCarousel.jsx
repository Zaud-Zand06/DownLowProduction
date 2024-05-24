import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HeroCarousel() {
  const [carouselWidth, setCarouselWidth] = useState(
    window.innerWidth <= 700 ? window.innerWidth * 1 : window.innerWidth * 1
  );

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 700
        ? setCarouselWidth(window.innerWidth * 1)
        : setCarouselWidth(window.innerWidth * 1);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Carousel
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        emulateTouch={true}
        showArrows={false}
        width={carouselWidth}
      >
        <img src="/src/assets/goKill.png" />
        <img src="/src/assets/jinBoot.jpg" />
      </Carousel>
    </>
  );
}

export default HeroCarousel;
