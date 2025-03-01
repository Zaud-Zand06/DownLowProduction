import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./component_css/HeroCarousel.css";
import dessertBar from "../assets/dessertBars.avif";
import jerry from "../assets/jerry.avif";
import sidesImage from "../assets/sides.avif";
import mrFeastSando from "../assets/ramadanHalalCrop.avif";
// Slides should be an array of objects with with an image, description, title and alt text.
// you can have as many slides as you want, but try and limit it to less than 10 just so its not too crazy
const slides = [
  {
    title: "The Mr.Feast Sando!",
    image: mrFeastSando,
    description:
      "Our first collaboration with the wonderful Mr Feast Vancouver! Cripsy Fried Chicken, dunked in a Hot Honey Glaze, Turbo Garlic Ranch, Slaw, hybrid BnB and Dill pickles with extra garlic! ",
    altText:
      "A fried chicken sandwhich with coleslaw, hot honey glaze, and pickles.",
  },
  {
    title: "Cereal Dessert Bars!",
    image: dessertBar,
    description:
      "Inspired by our childhood favourites, we're always offering Peanut Butter & Chocolate, and Cinnamon Toast Crunch Dessert bars, with a rotating selection of speciality bars for you to try!",
    altText:
      "Two large dessert bars, one chocolate and one cinnamon, being held by a smiling man.",
  },
  {
    title: "Have you tried our sides?",
    image: sidesImage,
    description:
      "Our Bacon Baked Beans and creamy Mac and Cheese are back for the winter season! Make sure to get them before they're gone!",
    altText:
      "A side of bacon baked beans, topped with cheese in a to go container, next to it is a side of creamy looking mac and cheese.",
  },
  {
    title: "Been here before?",
    image: jerry,
    description:
      "Try customizing your favourite sando with different toppings like bacon, cheese, or even a fried egg!",
    altText:
      "A massive fried chicken sandwhich, made with two butterflied legs, topped with melted cheese and bacon.",
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
          <img src={slide.image} alt={slide.altText} />
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
