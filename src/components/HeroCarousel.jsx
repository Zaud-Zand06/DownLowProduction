import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./component_css/HeroCarousel.css";
import dessertBar from "../assets/dessertBars.avif";
import drumsticks from "../assets/DLDrums.avif";
import potSaladMacSalad from "../assets/potSaladMacSalad.avif";
import lemonPepperSando from "../assets/LemonPepper1.avif";
// Slides should be an array of objects with with an image, description, title and alt text.
// you can have as many slides as you want, but try and limit it to less than 10 just so its not too crazy
const slides = [
  {
    title: "The Return of the Lemon Pepper",
    image: lemonPepperSando,
    description:
      "After months of waiting, the Lemon Pepper is finally back! Lemony Honey Jalapeno Mayo, A spicy Frank's Red and Chili Oil dunk, and the classic Lemon Pepper Dusting!",
    altText:
      "A fried chicken sandwich with coleslaw, hot honey dip and lemon pepper seasoning.",
  },
  {
    title: "Looking for a Good Deal?",
    image: drumsticks,
    description:
      "Craving some bone-in chicken? Well you're in luck! We are now offering bone-in chicken drums, for only 2 dollars! Only available on Tuesdays!",
    altText:
      "Fried drumsticks in a box, coated in a hot spice blend and topped with pickles, next to a can of coca-cola.",
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
    image: potSaladMacSalad,
    description: `You asked and we listened! Our Famous Mac Salad and Potato Salad are back for the Spring and Summer, Cheesy Pimento or Creamy backyard-style dill dressing are perfect for enjoying the sun!`,
    altText: "A side of potato salad and pimento mac salad.",
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
