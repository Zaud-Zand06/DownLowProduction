import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HeroCarousel.css";
import sliderImage from "../assets/jinBoot.jpg";

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
        swipeable={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        width={carouselWidth}
        className="presentationMode"
      >
        <div className="mySlide">
          <img src={sliderImage} />
          <h2>The Typhoon!</h2>
          <p>
            This months special is a pnw influenced take on the Typhoon spice! A
            creamy LGM based mayo balanced with a tangy pickle-mustad slaw....
            get ready to be blown :D away! S
          </p>
        </div>
        <div className="mySlide">
          <img src={sliderImage} />
          <h2>......is it Wednesday yet...?</h2>
          <p>
            Missing our bone-in chicken? Come by any Wednesday for our full
            sized wings! Order them by the piece and spice them however you
            like!
          </p>
        </div>
        <div className="mySlide">
          <img src={sliderImage} />
          <p>
            Miss our Pepinos collab? Check back soon to see our next collab!
          </p>
        </div>
      </Carousel>
    </>
  );
}

export default HeroCarousel;
