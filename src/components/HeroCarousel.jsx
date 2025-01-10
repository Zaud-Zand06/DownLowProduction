import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./component_css/HeroCarousel.css";
import agroDulce1 from "../assets/AgroDulce1.jpg";
import dessertCup from "../assets/DessertCup1.jpg";
import jerry from "../assets/jerry1.jpg";
import sidesImage from "../assets/sides.jpg";

// Slides should be an array of objects with with an image, description, and title
const slides = [
  {
    title: "The Agrodulce!",
    image: agroDulce1,
    description:
      "Our newest sando is a sweet and tangy blend of classic italian flavours! Basil mayo, basil slaw, our updated pizza dust, and our lovingly prepared Agrodulce, topped with a heavy cheese dusting.",
  },
  {
    title: "Beans are back!",
    image: sidesImage,
    description:
      "You asked, we delivered! Our bacon baked beans are back for the winter season. Make sure to get them before they're gone!",
  },
  {
    title: "Leave room for dessert!",
    image: dessertCup,
    description:
      "Made fresh by our lovely friends at Vennies. We're always offering Lemon Curd Cake and Chocolate Mousse Cake, with a rotating selection of speciality cups for you to try!",
  },
  {
    title: "Been here before?",
    image: jerry,
    description:
      "Try customizing your favourite sando with different toppings like bacon, cheese, or even a fried egg!",
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
        <div key={index} className="slideDiv">
          <img src={slide.image} alt={slide.description} />
          <div className="slideText">
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
