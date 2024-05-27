import { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { Masonry } from "@mui/lab";

const sandosList = [
  {
    title: "The Typhoon",
    description:
      "Pickled onions, Cole slaw, Pickles, DL Sauce, and your choice of breast or leg!",
    price: 18.75,
    special: true,
  },
  {
    title: "The Og",
    description:
      "Pickled onions, Cole slaw, Pickles, DL Sauce, and your choice of breast or leg!",
    price: 18.25,
    special: false,
  },
  {
    title: "The Rookie",
    description:
      "Pickled onions, Cole slaw, Pickles, DL Sauce, and your choice of breast or leg!",
    price: 18.25,
    special: false,
  },
  {
    title: "The Jerk",
    description:
      "Pickled onions, Cole slaw, Pickles, DL Sauce, and your choice of breast or leg!",
    price: 18.25,
    special: false,
  },
  {
    title: "The Boujee",
    description:
      "Pickled onions, Cole slaw, Pickles, DL Sauce, and your choice of breast or leg!",
    price: 18.25,
    special: false,
  },
  {
    title: "The Chip and Dip",
    description:
      "Pickled onions, Cole slaw, Pickles, DL Sauce, and your choice of breast or leg!",
    price: 18.25,
    special: false,
  },
];

const shareablesList = [
  {
    title: "Tenders",
    description: "4 or 7 tenders with your choice of dipping sauce!",
    price: 12.75,
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
    description: "Full sized chicken wings! Order by the piece!",
    price: 3.25,
    special: true,
  },
];

const sidesList = [
  {
    title: "Fries",
    description: "Crinkle-cut fries! Salted, with our medium dust!",
    price: 6.25,
    special: false,
  },
  {
    title: "Potato Salad",
    description: "Pot salad!",
    price: 5.0,
    special: false,
  },
  {
    title: "Macaroni Salad",
    description: "Mac salad!",
    price: 5.0,
    special: false,
  },
  {
    title: "Sweet-and-Sour Slaw",
    description: "Tangy cole slaw to help with the heat!",
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
    title: "Tres Leches Cake",
    description: "Our new tres leches cake!",
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
