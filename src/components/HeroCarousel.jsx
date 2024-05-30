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
            get ready to be blown :D away!
          </p>
        </div>
        <div className="mySlide">
          <img src={sliderImage} />
          <h2>Customize your Sando!</h2>
          <p>
            Consider yourself a DL veteran? Try customizing your favourite sando
            with our various toppings! Bacon, Cheese, Eggs, and any other
            modification your heart desires!
          </p>
        </div>
        <div className="mySlide">
          <img src={sliderImage} />
          <h2>Got a sweet tooth?</h2>
          <p>
            Try some of our new desserts! Made fresh by our lovely friends at
            Vennies. Now offering Tres Leches, Lemon Curd Cake, and Chocolate
            Mousse Cake!
          </p>
        </div>
      </Carousel>
    </>
  );
}

export default HeroCarousel;
