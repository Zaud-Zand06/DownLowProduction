import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./component_css/HeroCarousel.css";
import agroDulce1 from "../assets/AgroDulce1.jpg";
import dessertCup from "../assets/DessertCup1.jpg";
import jerry from "../assets/jerry1.jpg";
import heinzSpecial from "../assets/heinzSando.jpg";

// Slides should be an array of objects with with an image, description, and title
const slides = [
  {
    title: "The Agrodulce!",
    image: agroDulce1,
    description:
      "Our newest sando is a sweet and tangy blend of classic italian flavours! Basil mayo, basil slaw, our updated pizza dust, and our lovingly prepared Agrodulce, topped with a heavy cheese dusting.",
  },
  {
    title: "DownLow X Heinz!",
    image: heinzSpecial,
    description:
      "We've recently collaborated with Heinz to bring you some truly original sandos! Come by and try our new PLACEHOLDERTEXTINFO!",
  },
  {
    title: "Leave room for dessert!",
    image: dessertCup,
    description:
      "Try some of our new desserts! Made fresh by our lovely friends at Vennies. Now offering Strawberry Shortcake, Lemon Curd Cake, and Chocolate Mousse Cake!",
  },
  {
    title: "Been here before?",
    image: jerry,
    description:
      "Consider yourself a DL veteran? Try customizing your favourite sando with different toppings like bacon, cheese, or even a fried egg!",
  },
];

function HeroCarousel() {
  //make the carousel width responsive
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

  const createSlides = (slides) => {
    return slides.map((slide, index) => {
      return (
        <div key={index} className="mySlide">
          <img src={slide.image} alt={slide.description} />
          <div className="carouselSlideText">
            <h2>{slide.title}</h2>
            <p>{slide.description}</p>
          </div>
        </div>
      );
    });
  };

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
        {createSlides(slides)}
      </Carousel>
    </>
  );
}

export default HeroCarousel;
