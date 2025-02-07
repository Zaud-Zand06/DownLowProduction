import "./component_css/menu.css";
import { useState, useEffect } from "react";
import { Masonry } from "@mui/lab";
import Card from "@mui/material/Card";

const sandosList = [
  {
    title: "The Buldak",
    description:
      "Ramen Dredged Chicken, Ramen Seasoning Hot Sauce, Scallion and red pickle Slaw!",
    price: 19.15,
    special: null,
  },
  {
    title: "The OG",
    description:
      "Nashville Dusted Chicken, Pickled onions, Cole slaw, Pickles, DL Sauce",
    price: 19.15,
    special: null,
  },
  {
    title: "The Stinger",
    description: "Fermented Chili Honey, Charred Cabbage Slaw, Rookie Mayo",
    price: 19.15,
    special: null,
  },
  {
    title: "The Jerk",
    description: "Jerk Dusted Chicken, Pickled onions, Slaw, Tomato, Jerk Mayo",
    price: 19.15,
    special: null,
  },
  {
    title: "The Agrodulce",
    description:
      "New Pizza Dusted Chicken, Basil slaw, Fresh basil, Pesto Sauce",
    price: 19.15,
    special: null,
  },
  {
    title: "The Rookie",
    description: "Classic Chicken, Shredduce, Tomato, Rookie Sauce",
    price: 19.15,
    special: null,
  },
  {
    title: "Extra Toppings",
    description: "Fried Egg, Bacon, Cheese",
    price: 2.75,
    special: null,
  },
];
const chickenByThePieceList = [
  {
    title: "Breast",
    description: "All White Meat & Tender",
    price: 10.99,
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
    price: 16.5,
    special: false,
  },
  {
    title: "Large Tenders",
    description:
      "The most tender part of the breast! Dusted with spice and a side of sauce",
    price: 22.85,
    special: false,
  },
  {
    title: "Nuggets",
    description: "A bowl of popcorn chicken with your choice of dipping sauce",
    price: 10.99,
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
    title: "Macaroni and Cheese",
    description: "Warm, Cheesy, and Creamy",
    price: 5.25,
    special: false,
  },
  {
    title: "Bacon Baked Beans",
    description: "Bacon, onions, beans, with a bit of a kick",
    price: 5.25,
    special: false,
  },
  {
    title: "Sweet-and-Sour Slaw",
    description: "Cumin, Pickled Onions",
    price: 5.25,
    special: false,
  },
  {
    title: "Pickles",
    description: "A cup of our house-made bread and butter pickles",
    price: 3.25,
    special: false,
  },
  {
    title: "Peanut Butter and Chocolate Dessert Bar",
    description: "Sweet, savoury and crunchy",
    price: 5.45,
    special: false,
  },
  {
    title: "Cinnamon Toast Dessert Bar",
    description: "Cinnamon toast dessert bar",
    price: 5.45,
    special: false,
  },
];
const waffleList = [
  {
    title: "Chicken and Waffle",
    description: "A fresh waffle topped with two boneless, dusted thighs",
    price: 18.95,
    special: "Add an extra thigh for 4!",
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
    title: "Small Tender Combo",
    description: "4 tenders, any side and a drink",
    price: 22.49,
    special: false,
  },
  {
    title: "Large Tender Combo",
    description: "7 tenders, any side and a drink",
    price: 28.48,
    special: false,
  },
  {
    title: "Sando and a Side",
    description: "Any of our sandos and any side",
    price: 25.15,
    special: false,
  },
  {
    title: "Two Piece and a Side",
    description: "2 boneless thighs, any side and a drink",
    price: 17.49,
    special: false,
  },
  {
    title: "Two by Four",
    description: "4 thighs, any 2 sides and 2 drinks",
    price: 34.49,
    special: false,
  },
  {
    title: "1 Breast and a Side",
    description: "1 white meat breast, any side and a drink",
    price: 16.49,
    special: false,
  },
  {
    title: "2 Breasts and a Side",
    description: "2 white meat breasts, any side and a drink",
    price: 25.49,
    special: false,
  },
  {
    title: "Piled High",
    description: "10 boneless thighs, any 4 sides and 4 drinks",
    price: 66.15,
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
            {section.items.map((item, index) => {
              return (
                <Card
                  variant="outlined"
                  key={index}
                  style={{
                    backgroundColor: "var(--card-background-colour)",
                    margin: ".5rem",
                  }}
                  className="menuCardItem"
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.special && <h4>{item.special}</h4>}
                  <p className="price">{item.price}</p>
                </Card>
              );
            })}
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
