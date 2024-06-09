import "./secretMenu.css";
import { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import logo from "../assets/the_logo.png";

const secretMenuList = [
  {
    title: "Fries on the DL",
    description:
      "Fries topped with slaw, pickled onions, pickles and a big squeeze of our DL sauce, with chopped thighs or a breast",
    image: logo,
  },
  {
    title: "Waffle on the DL",
    description:
      "A fresh waffle topped with slaw, pickled onions, pickles, topped with thighs or a breast and a side of smoked jalapeno sauce",
    image: logo,
  },
  {
    title: "The Double Double Down",
    description:
      "A fresh waffle topped with slaw, pickled onions, pickles, topped with thighs or a breast and a side of smoked jalapeno sauce",
    image: logo,
  },
  {
    title: "The Jerry",
    description:
      "A fresh waffle topped with slaw, pickled onions, pickles, topped with thighs or a breast and a side of smoked jalapeno sauce",
    image: logo,
  },
  {
    title: "The Chicken Bacon Ranch",
    description:
      "A fresh waffle topped with slaw, pickled onions, pickles, topped with thighs or a breast and a side of smoked jalapeno sauce",
    image: logo,
  },
];

function SecretMenu() {
  const [carouselWidth, setCarouselWidth] = useState(
    window.innerWidth <= 700
      ? window.innerWidth * 0.9
      : window.innerWidth * 0.75
  );

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 700
        ? setCarouselWidth(window.innerWidth * 0.9)
        : setCarouselWidth(window.innerWidth * 0.75);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <p>Nice work! You found our secret menu </p>
    </>
  );
}

export default SecretMenu;
