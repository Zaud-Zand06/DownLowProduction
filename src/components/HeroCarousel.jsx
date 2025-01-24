import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./component_css/HeroCarousel.css";
import agroDulce1 from "../assets/AgroDulce1.jpg";
import dessertCup from "../assets/DessertCup1.jpg";
import jerry from "../assets/jerry1.jpg";
import sidesImage from "../assets/sides.jpg";
import DLWingsImage from "../assets/DLWings1.jpg";

// Slides should be an array of objects with with an image, description, title and alt text.
// you can have as many slides as you want, but try and limit it to less than 10 just so its not too crazy
const slides = [
  {
    title: "The Agrodulce!",
    image: agroDulce1,
    description:
      "Our newest sando is a sweet and tangy blend of classic italian flavours! Basil mayo, basil slaw, our updated pizza dust, and our lovingly prepared Agrodulce, topped with a heavy cheese dusting.",
    altText:
      "A fried chicken sandwhich with basil mayo, basil slaw, pizza dust, and agrodulce. Topped with a heavy cheese dusting.",
  },
  {
    title: "Beans are back!",
    image: sidesImage,
    description:
      "You asked, we delivered! Our Bacon Baked Beans and creamy Mac and Cheese are back for the winter season. Make sure to get them before they're gone!",
    altText:
      "A side of bacon baked beans, topped with cheese in a to go container, next to it is a side of creamy looking mac and cheese.",
  },
  {
    title: "Leave room for dessert!",
    image: dessertCup,
    description:
      "Made fresh by our lovely friends at Vennies. We're always offering Peanut Butter and Chocolate Dessert bars and Cinnamon Toast Crunch Dessert bars, with a rotating selection of speciality bars for you to try!",
    altText:
      "A dessert cup filled with strawberry cake, surrounded by a bunch of sliced strawberries.",
  },
  {
    title: "Wing Wednesday!",
    image: DLWingsImage,
    description:
      "Looking for bone-in chicken? Every Wednesday, we're offering our famous full-sized DL Wings, spiced however you'd like!",
    altText:
      "A small pile of fried chicken wings, topped with pickles and a light seasoning.",
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
