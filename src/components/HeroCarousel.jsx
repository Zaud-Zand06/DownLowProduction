import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HeroCarousel.css";

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
        className="presentationMode"
      >
        <div className="mySlide">
          <img src="/public/goKill.png" />
          <p>Check out our monthly special! The typhoon!</p>
        </div>
        <div className="mySlide">
          <img src="/public/jinBoot.jpg" />
          <p>
            Missing some bone-in chicken? Come by any Wednesday for Wing
            Wednesday!
          </p>
        </div>
        <div className="mySlide">
          <img src="/public/jinBoot.jpg" />
          <p>
            Miss our Pepinos collab? Check back soon to see our next collab!
          </p>
        </div>
      </Carousel>
    </>
  );
}

export default HeroCarousel;
