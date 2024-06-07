import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HeroCarousel.css";
import agroDulce1 from "../assets/AgroDulce1.jpg";
import sandoSpread from "../assets/SandoSpread.jpg";
import sandoSpread2 from "../assets/SandoSpread2.jpg";
import dessertCup from "../assets/DessertCup1.jpg";

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
          <img src={agroDulce1} />
          <h2>The AgroDulce!</h2>
          <p>
            Our newest special is a sweet and tangy blend of classic italian
            flavours! Basil mayo, basil slaw, our updated pizza dust, and our
            lovingly prepared Agrodulce, topped with a light cheese dusting.
          </p>
        </div>
        <div className="mySlide">
          <img src={sandoSpread} />
          <h2>Been here before?</h2>
          <p>
            Consider yourself a DL veteran? Try customizing your favourite sando
            with different toppings like bacon, cheese, or even a fried egg!
          </p>
        </div>
        <div className="mySlide">
          <img src={dessertCup} />
          <h2>Leave room for dessert!</h2>
          <p>
            Try some of our new desserts! Made fresh by our lovely friends at
            Vennies. Now offering Strawberry Shortcake, Lemon Curd Cake, and
            Chocolate Mousse Cake!
          </p>
        </div>
        <div className="mySlide">
          <img src={sandoSpread2} />
          <h2>We also do Catering!</h2>
          <p>
            Want to leave a big impression for your next event? Get in touch
            with Sydney at (123)123-1234 or email her at email.com for more
            information!
          </p>
        </div>
      </Carousel>
    </>
  );
}

export default HeroCarousel;
