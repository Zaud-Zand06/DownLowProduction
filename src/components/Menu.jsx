import "./component_css/menu.css";
import { useState, useEffect } from "react";
import { Masonry } from "@mui/lab";
import Card from "@mui/material/Card";

const sandosList = [
  {
    title: "The Agrodulce",
    description:
      "New Pizza Dusted Chicken, Basil slaw, Fresh basil, Pesto Sauce",
    price: 18.75,
    special: null,
  },
  {
    title: "The OG",
    description:
      "Nashville Dusted Chicken, Pickled onions, Cole slaw, Pickles, DL Sauce",
    price: 18.25,
    special: null,
  },
  {
    title: "The Rookie",
    description: "Classic Chicken, Shredduce, Tomato, Rookie Sauce",
    price: 18.25,
    special: null,
  },
  {
    title: "The Jerk",
    description: "Jerk Dusted Chicken, Pickled onions, Slaw, Tomato, Jerk Mayo",
    price: 18.25,
    special: null,
  },
  {
    title: "The Boujee",
    description:
      "Boujee Dusted Chicken, Pickled onions, Cole slaw, Pickles, Boujee Mayo",
    price: 18.25,
    special: null,
  },
  {
    title: "The Stinger",
    description: "Fermented Chili Honey, Charred Cabbage Slaw, Rookie Mayo",
    price: 18.25,
    special: null,
  },
  {
    title: "Extra Toppings",
    description: "Fried Egg, Bacon, Cheese",
    price: 2.25,
    special: null,
  },
];
const chickenByThePieceList = [
  {
    title: "Breast",
    description: "All White Meat & Tender",
    price: 10.95,
    special: null,
  },
  {
    title: "Thigh",
    description: "Boneless & Juicy",
    price: 6.25,
    special: false,
  },
  {
    title: "Small Tenders",
    description:
      "The most tender part of the breast! Dusted with spice and a side of sauce",
    price: 15.5,
    special: false,
  },
  {
    title: "Large Tenders",
    description:
      "The most tender part of the breast! Dusted with spice and a side of sauce",
    price: 21.85,
    special: false,
  },
  {
    title: "Nuggets",
    description: "A bowl of popcorn chicken with your choice of dipping sauce",
    price: 11.6,
    special: null,
  },
  {
    title: "Wings",
    description:
      "Full sized chicken wings! Order as many as you want, but only on Wednesdays",
    price: 3.25,
    special: null,
  },
  {
    title: "Pile of Thighs",
    description: "A pile of 10 boneless thighs! Dusted to your liking",
    price: 49.75,
    special: false,
  },
];
const sidesList = [
  {
    title: "Regular Fries",
    description:
      "Crinkle-cut, salted, with medium dust! Comes with ketchup and DL sauce",
    price: 7.25,
    special: "Get them truffled for 2",
  },
  {
    title: "Half-Size Fries",
    description:
      "Crinkle-cut, salted, with medium dust! Comes with ketchup and DL sauce",
    price: 5.25,
    special: "Get them truffled for 2",
  },
  {
    title: "Bacon Baked Beans",
    description: "Bacon, onions, beans, with a bit of a kick",
    price: 6.25,
    special: false,
  },
  {
    title: "Macaroni and Cheese",
    description: "Warm, Cheesy, and Creamy",
    price: 6.25,
    special: false,
  },
  {
    title: "Sweet-and-Sour Slaw",
    description: "Cumin, Pickled Onions",
    price: 5.75,
    special: false,
  },
  {
    title: "Pickles",
    description: "A cup of our house-made bread and butter pickles",
    price: 2.95,
    special: false,
  },
  {
    title: "Lemon Cake",
    description: "Tart, sweet, and creamy",
    price: 7,
    special: false,
  },
  {
    title: "Chocolate Mousse",
    description: "Choclatey, creamy, and delicious",
    price: 7,
    special: false,
  },
  {
    title: "Special Cake",
    description: "Come in and ask what are special cake is today!",
    price: 8.0,
    special: false,
  },
];
const waffleList = [
  {
    title: "Chicken and Waffle",
    description: "A fresh waffle topped with two boneless, dusted thighs",
    price: 8.25,
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
    title: "Two Piece and a Side",
    description: "2 boneless thighs and any side",
    price: 17.8,
    special: false,
  },
  {
    title: "Small Tender Combo",
    description: "4 tenders and any side",
    price: 19.95,
    special: false,
  },
  {
    title: "Large Tender Combo",
    description: "7 tenders and any side",
    price: 25.25,
    special: false,
  },
  {
    title: "Sando and a Side",
    description: "Any of our sandos and any side",
    price: 23.95,
    special: false,
  },
  {
    title: "Two by Four",
    description: "4 thighs and any 2 sides",
    price: 31.35,
    special: false,
  },
  {
    title: "Piled High",
    description: "10 boneless thighs and any 4 sides",
    price: 59.95,
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

const displayMenuList = [
  {
    title: "Sandos",
    description: ["Choose between boneless leg or breast", "Add a side for 5"],
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
  {
    title: "Sauces",
    description: ["For dipping, or drizzling. All sauces are made in house"],
    items: sauceList,
  },
];

function makeMenuList(menuList, windowWidth) {
  return (
    <Masonry
      columns={windowWidth <= 700 ? 1 : 2}
      spacing={2}
      defaultHeight={450}
      defaultColumns={4}
      defaultSpacing={1}
    >
      {menuList.map((section, index) => {
        return (
          <div key={index} className="menuCard">
            <h2 className="sectionTitle">{section.title}</h2>
            {section.description &&
              section.description.map((line, index) => {
                return <h4 key={index}>{line}</h4>;
              })}
            <Masonry columns={2} spacing={2}>
              {section.items.map((item, index) => {
                return (
                  <Card
                    variant="outlined"
                    key={index}
                    style={{ backgroundColor: "var(--card-background-colour)" }}
                    className="menuCardItem"
                  >
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    {item.special && <h4>{item.special}</h4>}
                    <p className="price">{item.price}</p>
                  </Card>
                );
              })}
            </Masonry>
          </div>
        );
      })}
    </Masonry>
  );
}

function Menu() {
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
    <div className="menuContainer">
      {makeMenuList(displayMenuList, windowWidth)}
    </div>
  );
}

export default Menu;
