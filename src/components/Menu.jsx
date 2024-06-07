import { useState, useEffect } from "react";
import { Masonry } from "@mui/lab";

const sandosList = [
  {
    title: "The AgroDulce",
    description:
      "New Pizza Dusted Chicken, Basil slaw, Fresh basil, Pesto Sauce, and your choice of breast or leg!",
    price: 18.75,
    special: true,
  },
  {
    title: "The Og",
    description:
      "Nashville Dusted Chicken, Pickled onions, Cole slaw, Pickles, DL Sauce, and your choice of breast or leg!",
    price: 18.25,
    special: false,
  },
  {
    title: "The Rookie",
    description:
      "Classic Chicken, Shredduce, Tomato, Rookie Sauce, and your choice of breast or leg!",
    price: 18.25,
    special: false,
  },
  {
    title: "The Jerk",
    description:
      "Jerk Dusted Chicken, Pickled onions, Slaw, Tomato, Jerk Mayo, and your choice of breast or leg!",
    price: 18.25,
    special: false,
  },
  {
    title: "The Boujee",
    description:
      "Boujee Dusted Chicken, Pickled onions, Cole slaw, Pickles, Boujee Mayo, and your choice of breast or leg!",
    price: 18.25,
    special: false,
  },
  {
    title: "The Chip and Dip",
    description:
      "Cool Ranch Dusted Chicken, Shredduce, Pickles, Tomato, French Onion Mayo, and your choice of breast or leg!",
    price: 18.25,
    special: false,
  },
];

const shareablesList = [
  {
    title: "Four Tenders",
    description:
      "The most tender part of the breast! Spiced to your liking with your choice of sauce on the side!",
    price: 12.75,
    special: false,
  },
  {
    title: "Seven Tenders",
    description:
      "The most tender part of the breast! Spiced to your liking with your choice of sauce on the side!",
    price: 18.75,
    special: false,
  },
  {
    title: "Nuggets",
    description: "A bowl of popcorn chicken with your choice of dipping sauce!",
    price: 12.75,
    special: false,
  },
  {
    title: "Wings",
    description: "Full sized chicken wings! Order as many as you want!",
    price: 3.25,
    special: true,
  },
];

const sidesList = [
  {
    title: "Fries",
    description:
      "Crinkle-cut fries! Salted, with our medium dust! Comes with ketchup and DL sauce!",
    price: 6.25,
    special: false,
  },
  {
    title: "Potato Salad",
    description: "Mayo, Pickles, Scallion, and Dill",
    price: 6.25,
    special: false,
  },
  {
    title: "Macaroni Salad",
    description: "Pimento Cheese, Dill, and Celery!",
    price: 6.25,
    special: false,
  },
  {
    title: "Sweet-and-Sour Slaw",
    description: "Cumin, Pickled Onions!",
    price: 5.0,
    special: false,
  },
  {
    title: "Pickles",
    description: "A cup of our house-made bread and butter pickles!",
    price: 5.0,
    special: false,
  },
  {
    title: "Lemon Cake",
    description: "Our new lemon cake!",
    price: 7,
    special: false,
  },
  {
    title: "Chocolate Cake",
    description: "Our new chocolate cake!",
    price: 7,
    special: false,
  },
  {
    title: "Strawberry Short Cake",
    description: "Our new strawberry short cake!",
    price: 5.0,
    special: false,
  },
];

const drinksList = [
  {
    title: "DL Lemonade",
    description: "Lemonade!",
    price: 4,
    special: false,
  },
  {
    title: "DL Sweet Tea",
    description: "Sweet tea!",
    price: 4,
    special: false,
  },
  {
    title: "Coke",
    description: "Diet coke, coke zero, or regular!",
    price: 2.5,
    special: false,
  },
  {
    title: "Sprite",
    description: "Sprite!",
    price: 2.5,
    special: false,
  },
  {
    title: "Root Beer",
    description: "Root Beer!",
    price: 2.5,
    special: false,
  },
  {
    title: "Water",
    description: "Water!",
    price: 2.5,
    special: false,
  },
];

const waffleList = [
  {
    title: "Solo Waffle",
    description: "A fresh jalapeno, cheddar, and scallion waffle!",
    price: 4.25,
    special: false,
  },
  {
    title: "Chicken and Waffle",
    description:
      "A fresh waffle topped with two boneless thighs, dusted to your liking!",
    price: 8.25,
    special: false,
  },
  {
    title: "Waffle Slider",
    description:
      "Dusted chicken, slaw, pickles, pickled onions and honey jallapeno sauce, built on a waffle.",
    price: 10.25,
    special: false,
  },
  {
    title: "Waffle on the DL",
    description:
      "A fresh waffle, slaw and honey jalapeno sauce, topped with some chopped boneless thighs!",
    price: 12.25,
    special: false,
  },
];

function Menu() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth <= 700
        ? setWindowWidth(window.innerWidth * 1)
        : setWindowWidth(window.innerWidth * 1);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="menuContainer">
      <Masonry
        columns={windowWidth <= 700 ? 1 : 2}
        spacing={2}
        defaultHeight={450}
        defaultColumns={4}
        defaultSpacing={1}
      >
        <div className="sectionContainer">
          <h2>Sandos</h2>
          <h4>Choose between boneless leg or breast</h4>
          <h4>Add a side for 5 </h4>
          <Masonry columns={2} spacing={2}>
            {sandosList.map((sando, index) => {
              return (
                <div key={index}>
                  <h3>{sando.title}</h3>
                  <p>{sando.description}</p>
                  <p>{sando.price}</p>
                </div>
              );
            })}
          </Masonry>
        </div>
        <div className="sectionContainer">
          <h2>Shareables</h2>
          <h4>Don't forget to grab some dipping sauce!</h4>
          <Masonry columns={2} spacing={2}>
            {shareablesList.map((shareable, index) => {
              return (
                <div key={index}>
                  <h3>{shareable.title}</h3>
                  <p>{shareable.description}</p>
                  <p>{shareable.price}</p>
                </div>
              );
            })}
          </Masonry>
        </div>
        <div className="sectionContainer">
          <h2>Waffles</h2>
          <Masonry columns={2} spacing={2}>
            {waffleList.map((waffle, index) => {
              return (
                <div key={index}>
                  <h3>{waffle.title}</h3>
                  <p>{waffle.description}</p>
                  <p>{waffle.price}</p>
                </div>
              );
            })}
          </Masonry>
        </div>
        <div className="sectionContainer">
          <h2>Sides</h2>
          <Masonry columns={2} spacing={2}>
            {sidesList.map((side, index) => {
              return (
                <div key={index}>
                  <h3>{side.title}</h3>
                  <p>{side.description}</p>
                  <p>{side.price}</p>
                </div>
              );
            })}
          </Masonry>
        </div>
        <div className="sectionContainer">
          <h2>Drinks</h2>
          <Masonry columns={2} spacing={2}>
            {drinksList.map((drink, index) => {
              return (
                <div key={index}>
                  <h3>{drink.title}</h3>
                  <p>{drink.price}</p>
                </div>
              );
            })}
          </Masonry>
        </div>
      </Masonry>
    </div>
  );
}

export default Menu;
