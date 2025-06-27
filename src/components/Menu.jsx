import "./component_css/menu.css";
import { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import dessertImage from "../assets/dessertBars.avif";
import OGSando from "../assets/OGSando1.avif";
import PaisanoSando from "../assets/Paisano1.avif";
import PotSalad from "../assets/PotSalad1.avif";

const menuImages = [
  {
    name: "OG Sando",
    price: 18.99,
    imageSrc: OGSando,
    altText:
      "Fried Chicken sandwich with slaw, and pickles, placed on a sheet of wax paper.",
  },
  {
    name: "Potato Salad",
    price: 5.99,
    imageSrc: PotSalad,
    altText: "A creamy potato salad being held on a wooden fork.",
  },
  {
    name: "Paisano Sando",
    price: 18.99,
    imageSrc: PaisanoSando,
    altText:
      "Fried Chicken sandwich with sauteed onions and peppers, placed on a sheet of wax paper.",
  },
  {
    name: "Marshmallow Dessert Bars",
    price: 5.99,
    imageSrc: dessertImage,
    altText:
      "A man smiling while holding a chocolate peanut butter dessert bar, and a cinnamon toast crunch dessert bar.",
  },
];

const sandosList = [
  {
    title: "The Paisano Sando",
    description:
      "Italian Sausage dust, Sauteed Onions and Peppers, Basil garlic mayo",
    price: 18.99,
    special: null,
  },
  {
    title: "The OG",
    description:
      "Nashville Dusted Chicken, Pickled onions, Cole slaw, Pickles, DL Sauce",
    price: 18.99,
    special: null,
  },
  {
    title: "The Stinger",
    description: "Fermented Chili Honey, Charred Cabbage Slaw, Rookie Mayo",
    price: 18.99,
    special: null,
  },
  {
    title: "The Jerk",
    description: "Jerk Dusted Chicken, Pickled onions, Slaw, Tomato, Jerk Mayo",
    price: 18.99,
    special: null,
  },
  {
    title: "The Agrodulce",
    description:
      "New Pizza Dusted Chicken, Basil slaw, Fresh basil, Pesto Sauce",
    price: 18.99,
    special: null,
  },
  {
    title: "The Rookie",
    description: "Classic Chicken, Shredduce, Tomato, Rookie Sauce",
    price: 18.99,
    special: null,
  },
  {
    title: "Extra Toppings",
    description: "Fried Egg, Cheese",
    price: 2.25,
    special: null,
  },
];
const chickenByThePieceList = [
  {
    title: "Breast",
    description: "All White Meat & Tender",
    price: 11.99,
    special: "Add an extra breast for 10!",
  },
  {
    title: "Two Thighs",
    description: "Boneless & Juicy.",
    price: 10.99,
    special: "Add extra thighs for 5 each!",
  },
  {
    title: "4 Piece Tender",
    description:
      "The most tender part of the breast! Dusted with spice and a side of sauce",
    price: 17.99,
    special: false,
  },
  {
    title: "7 Piece Tenders",
    description:
      "The most tender part of the breast! Dusted with spice and a side of sauce",
    price: 29.99,
    special: false,
  },
  {
    title: "15 Piece Tenders",
    description:
      "The most tender part of the breast! Dusted with spice and a side of sauce",
    price: 49.99,
    special: false,
  },
  {
    title: "20 Piece Tenders",
    description:
      "The most tender part of the breast! Dusted with spice and a side of sauce",
    price: 66.99,
    special: false,
  },
  {
    title: "Nuggets",
    description: "A bowl of popcorn chicken with your choice of dipping sauce",
    price: 11.59,
    special: null,
  },
  {
    title: "Pile of Thighs",
    description: "A pile of 10 boneless thighs! Dusted to your liking",
    price: 49.75,
    special: false,
  },
  {
    title: "Wings",
    description:
      "Full sized chicken wings! Order as many as you want, but only on Wednesdays",
    price: 3.25,
    special: null,
  },
];
const sidesList = [
  {
    title: "Fries",
    description: "Crinkle-cut and crispy. Salted, spicy, or truffled!",
    price: 5.99,
    special: "Make it a large for 2 more",
  },
  {
    title: "Pimento Mac Salad",
    description: "Pimento Cheese dressing, Pickled Celery, Macaroni Noodles",
    price: 5.99,
    special: false,
  },
  {
    title: "Dill Potato Salad",
    description: "Creamy Dill Dressing",
    price: 5.99,
    special: false,
  },
  {
    title: "Sweet-and-Sour Slaw",
    description: "Cumin, Pickled Onions",
    price: 5.99,
    special: false,
  },
  {
    title: "Pickles",
    description: "A cup of our house-made bread and butter pickles",
    price: 3.99,
    special: false,
  },
  {
    title: "Marshmallow Dessert Bar",
    description:
      "Cinnamon Toast Crunch, Chocolate Peanut Butter, or our monthly special",
    price: 5.99,
    special: false,
  },
];
const waffleList = [
  {
    title: "Chicken and Waffle (Thighs)",
    description: "A fresh waffle topped with two boneless, dusted thighs",
    price: 18.99,
    special: "Add an extra thigh for 4!",
  },
  {
    title: "Chicken and Waffle (Breast)",
    description: "A fresh waffle topped with a boneless, dusted breast",
    price: 19.99,
    special: false,
  },
  {
    title: "Waffle Slider",
    description:
      "Dusted chicken, slaw, pickles, pickled onions and honey jallapeno sauce, built on a waffle",
    price: 10.25,
    special: false,
  },
];
const comboList = [
  {
    title: "Sando and a Side",
    description: "Any of our sandos and any side",
    price: 25.99,
    special: false,
  },
  {
    title: "4 Piece Tender Combo",
    description: "4 tenders, any side and a drink",
    price: 21.99,
    special: false,
  },
  {
    title: "7 Piece Tender Combo",
    description: "7 tenders, any side and a drink",
    price: 28.49,
    special: false,
  },
  {
    title: "15 Piece Tender Combo",
    description: "15 tenders, any two sides and two drinks",
    price: 49.99,
    special: false,
  },
  {
    title: "20 Piece Tender Combo",
    description: "20 tenders, any four side and four drinks",
    price: 86.99,
    special: false,
  },
  {
    title: "2 Piece and a Side",
    description: "2 boneless thighs, any side and a drink",
    price: 17.99,
    special: false,
  },
  {
    title: "4 Piece and a Side",
    description: "4 thighs, any 2 sides and 2 drinks",
    price: 33.99,
    special: false,
  },
  {
    title: "1 Breast and a Side",
    description: "1 white meat breast, any side and a drink",
    price: 17.99,
    special: "Add an extra breast for 10",
  },
  {
    title: "Piled High",
    description: "10 boneless thighs, any 4 sides and 4 drinks",
    price: 72.99,
    special: false,
  },
];
const sauceList = [
  {
    title: "DL Sauce",
    description: "Our house-made sauce, tangy and sweet",
    price: 2,
    special: false,
  },
  {
    title: "Ranch",
    description: "Classic ranch, creamy and tangy",
    price: 2,
    special: false,
  },
  {
    title: "Honey Mustard",
    description: "Sweet and tangy",
    price: 2,
    special: false,
  },
  {
    title: "Smoked Jalapeno Honey Mayo",
    description: "Sweet, Spicy and smokey",
    price: 2,
    special: false,
  },
  {
    title: "Barbecue",
    description: "Sweet and smokey",
    price: 2,
    special: false,
  },
  {
    title: "Chili Sesame",
    description: "Sweet, Spicy and smokey",
    price: 2,
    special: false,
  },
  {
    title: "Sweet and Sour",
    description: "Sweet and Sour",
    price: 2,
    special: false,
  },
  {
    title: "Truffle Mayo",
    description: "Truffle Mayo",
    price: 3,
    special: false,
  },
];
//remember to add the item list to the display list
const displayMenuList = [
  {
    title: "Sandos",
    description: ["Choose between boneless leg or breast"],
    items: sandosList,
  },
  {
    title: "By the Piece",
    description: ["Served on white bread and topped with some pickles"],
    items: chickenByThePieceList,
  },
  {
    title: "Waffles",
    description: [
      "A fresh savoury waffle, made with cheddar, jalapeno, buttermilk and scallions",
    ],
    items: waffleList,
  },
  {
    title: "Combos",
    description: ["A little bit of everything"],
    items: comboList,
  },
  {
    title: "Sides",
    description: ["For sharing, or for yourself"],
    items: sidesList,
  },
  // {
  //   title: "Sauces",
  //   description: ["For dipping, or drizzling. All sauces are made in house"],
  //   items: sauceList,
  // },
];

function makeMenuList(menuList) {
  const horizontalScroll = (event) => {
    if (event.target.closest(".menuCardItemContainer")) {
      event.preventDefault();
      const container = event.target.closest(".menuCardItemContainer");
      container.scrollLeft += (event.deltaY + event.deltaX) * 0.8;
    }
  };

  useEffect(() => {
    document.addEventListener("wheel", horizontalScroll, { passive: false });

    return () => {
      document.removeEventListener("wheel", horizontalScroll);
    };
  }, []);

  return (
    <div className="menuList">
      {menuList.map((section, index) => {
        return (
          <div key={index} className="menuCard">
            <h2 className="sectionTitle">{section.title}</h2>
            {section.description &&
              section.description.map((line, index) => {
                return (
                  <h4 className="sectionDescription" key={index}>
                    {line}
                  </h4>
                );
              })}
            <div className="menuCardItemContainer">
              {section.items.map((item, index) => {
                return (
                  <div className="menuCardItem" key={index}>
                    <h3>{item.title}</h3>
                    <p className="menuItemDescription">{item.description}</p>
                    {item.special && <h4>{item.special}</h4>}
                    <p className="price">{item.price}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Menu() {
  // menuImage will be looped through using the setMenuImage,
  // which just chooses the item index
  const [menuImage, setMenuImage] = useState(0);

  const updateMenuImage = () => {
    let newIndex = null;
    if (menuImage < menuImages.length - 1) {
      newIndex = menuImage + 1;
      setMenuImage(newIndex);
    } else {
      setMenuImage(0);
    }
  };
  // this will be the useEffect function that actually
  // calls the set interval in order to have the images change
  useEffect(() => {
    const interval = setInterval(updateMenuImage, 10000);

    return () => clearInterval(interval);
  });
  return (
    <>
      <Header />
      <div className="backgroundImage"></div>
      <div className="menuContainer">
        {makeMenuList(displayMenuList)}
        <div id="menuImageContainer">
          <h2>{menuImages[menuImage].name}</h2>
          <h3>$ {menuImages[menuImage].price}</h3>
          <img
            src={menuImages[menuImage].imageSrc}
            alttext={menuImages[menuImage].altText}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Menu;
