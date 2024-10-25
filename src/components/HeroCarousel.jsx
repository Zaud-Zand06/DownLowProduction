import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./component_css/HeroCarousel.css";
import agroDulce1 from "../assets/AgroDulce1.jpg";
import dessertCup from "../assets/DessertCup1.jpg";
import jerry from "../assets/jerry1.jpg";
import heinzSpecial from "../assets/heinzSando.jpg";

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
        interval={5000}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        width={carouselWidth}
        className="presentationMode"
      >
        <div className="mySlide">
          <img
            src={agroDulce1}
            alt="A fried chicken sandwhich next to a gold coloured drink"
          />
          <div className="carouselSlideText">
            <h2>The AgroDulce!</h2>
            <p>
              Our newest sando is a sweet and tangy blend of classic italian
              flavours! Basil mayo, basil slaw, our updated pizza dust, and our
              lovingly prepared Agrodulce, topped with a heavy cheese dusting.
            </p>
          </div>
        </div>
        <div className="mySlide">
          <img
            src={heinzSpecial}
            alt="Fried Chicken sandwhich with a pretzl bun and a special heinz sauce"
          />
          <div className="carouselSlideText">
            <h2>DownLow X Heinz!</h2>
            <p>
              We&apos;ve recently collaborated with Heinz to bring you some
              truly original sandos! Come by and try our new
              PLACEHOLDERTEXTINFO!
            </p>
          </div>
        </div>
        <div className="mySlide">
          <img
            src={dessertCup}
            alt="A plastic cup filled with short cake and topped with strawberries and cream"
          />
          <div className="carouselSlideText">
            <h2>Leave room for dessert!</h2>
            <p>
              Try some of our new desserts! Made fresh by our lovely friends at
              Vennies. Now offering Strawberry Shortcake, Lemon Curd Cake, and
              Chocolate Mousse Cake!
            </p>
          </div>
        </div>
        <div className="mySlide">
          <img
            src={jerry}
            alt="A large fried chicken sandwhich with bacon and cheese"
          />
          <div className="carouselSlideText">
            <h2>Been here before?</h2>
            <p>
              Consider yourself a DL veteran? Try customizing your favourite
              sando with different toppings like bacon, cheese, or even a fried
              egg!
            </p>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default HeroCarousel;
