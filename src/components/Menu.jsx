import "./component_css/menu.css";
import { useState, useEffect } from "react";
import { Masonry } from "@mui/lab";
import Card from "@mui/material/Card";

const sandosList = [
  {
    title: "The AgroDulce",
    description:
      "New Pizza Dusted Chicken, Basil slaw, Fresh basil, Pesto Sauce",
    price: 18.75,
    special: null,
  },
  {
    title: "The Og",
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
    special: "Add a honey drizzle for 1",
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
    special: "2 piece and 4 piece combos available",
  },
  {
    title: "Small Tenders",
    description:
      "The most tender part of the breast! Dusted with spice and a side of sauce",
    price: 15.5,
    special: "Add a side for 5",
  },
  {
    title: "Large Tenders",
    description:
      "The most tender part of the breast! Dusted with spice and a side of sauce",
    price: 21.85,
    special: "Add a side for 4",
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
    special: "Add 4 sides for 10",
  },
];
const sidesList = [
  {
    title: "Fries",
    description:
      "Crinkle-cut, salted, with medium dust! Comes with ketchup and DL sauce",
    price: 6.25,
    special: "Get them truffled for 2",
  },
  {
    title: "Potato Salad",
    description: "Sour cream, Celery, Scallion, and Dill",
    price: 6.25,
    special: false,
  },
  {
    title: "Macaroni Salad",
    description: "Pimento , Dill, and Pickled Celery",
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
    description: "Our new lemon cake",
    price: 7,
    special: false,
  },
  {
    title: "Chocolate Cake",
    description: "Our new chocolate cake",
    price: 7,
    special: false,
  },
  {
    title: "Strawberry Short Cake",
    description: "Our new strawberry short cake",
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
    title: "Sides",
    description: ["For sharing, or for yourself"],
    items: sidesList,
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
