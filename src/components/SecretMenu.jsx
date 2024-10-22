import "./component_css/secretMenu.css";
import { Masonry } from "@mui/lab";
import logo from "../assets/the_logo.png";
import { useState, useEffect } from "react";

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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 700
        ? setWindowWidth(window.innerWidth)
        : setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="secretMenuContainer">
      <h2>Nice work finding our secret menu...</h2>
      <Masonry columns={windowWidth < 700 ? 1 : 2} spacing={2}>
        {secretMenuList.map((item, index) => {
          return (
            <div key={index} className="secretMenuItem">
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          );
        })}
      </Masonry>
    </div>
  );
}

export default SecretMenu;
