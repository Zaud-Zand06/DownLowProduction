import "./component_css/menu.css";
import { useState, useEffect } from "react";
import { Masonry } from "@mui/lab";
import Card from "@mui/material/Card";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Drawer } from "@mui/material";

const sandoList = [
  "The Buldak Ramen Sando",
  "The OG Sando",
  "The Stinger",
  "Jerk Sando",
  "The AgroDolce",
  "Rookie of the Year",
  "The Mr Feast Sando",
  "DL Chicken Melt",
];

const byThePieceList = [
  "Breast",
  "Thigh",
  "4 Piece Tenders",
  "7 Piece Tenders",
  "15 Piece Tenders",
  "20 Piece Tenders",
  "Popcorn Nuggets",
  "Pile of Thighs",
  "Wings",
];

const waffleList = ["Waffle Solo", "Chicken and Waffles", "Waffle Slider"];

const comboList = [
  "4 Piece Tenders and a Side",
  "7 Piece Tenders and a Side",
  "Sando and a Side",
  "2 x Thigh Combo",
  "4 x Thigh Combo",
  "Breast Combo",
  "Piled High",
];

const sidesList = ["Spiced Skittles", "Dessert Marshmallow Cereal Bar"];

const shoppingCartDisplay = <div>IS THIS SHIT ON OR WHAT</div>;

function Menu() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [displayCart, setDisplayCart] = useState(false);
  const [sandoCatalogList, setSandoCatalogList] = useState([]);
  const [byThePieceCatalogList, setByThePieceCatalogList] = useState([]);
  const [waffleCatalogList, setWaffleCatalogList] = useState([]);
  const [comboCatalogList, setComboCatalogList] = useState([]);
  const [sidesCatalogList, setSidesCatalogList] = useState([]);

  // const [cartInventory, setCartInventory] = useState([]);
  // const addToCart = (item) => {
  //   setCartInventory(...cartInventory, item);
  // };

  const toggleCart = () => {
    setDisplayCart(!displayCart);
  };

  useEffect(() => {
    async function fetchCatalog() {
      try {
        const response = await fetch("http://localhost:3001/api/catalog");
        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`);
        }
        const data = await response.json();
        console.log("data:");
        console.log(data);
        console.log("named data:");
        let namedData = [];
        data.items.forEach((element) => {
          namedData.push(element.itemData.name);
        });
        console.log(namedData);

        // Filter items for each category
        const items = data.items || [];

        const sandoItems = items.filter(
          (item) =>
            sandoList.includes(item.itemData.name) &&
            !item.itemData.kitchen_name
        );
        setSandoCatalogList(sandoItems);

        const pieceItems = items.filter(
          (item) =>
            byThePieceList.includes(item.itemData.name) &&
            !item.itemData.kitchen_name
        );
        setByThePieceCatalogList(pieceItems);

        const waffleItems = items.filter(
          (item) =>
            waffleList.includes(item.itemData.name) &&
            !item.itemData.kitchen_name
        );
        setWaffleCatalogList(waffleItems);
        const comboItems = items.filter(
          (item) =>
            comboList.includes(item.itemData.name) &&
            !item.itemData.kitchen_name
        );
        setComboCatalogList(comboItems);

        const sidesItems = items.filter(
          (item) =>
            sidesList.includes(item.itemData.name) &&
            !item.itemData.kitchen_name
        );
        setSidesCatalogList(sidesItems);
      } catch (err) {
        console.error("Error fetching catalog:", err);
      }
    }

    fetchCatalog();
  }, []);

  function getFormattedPrice(item) {
    const priceInfo =
      item?.itemData?.variations?.[0]?.itemVariationData?.priceMoney;
    const priceInCents = parseInt(priceInfo?.amount?.$bigint || "0", 10);
    const currency = priceInfo?.currency || "CAD";
    return (priceInCents / 100).toLocaleString("en-CA", {
      style: "currency",
      currency,
    });
  }
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

  function renderCatalogSection(title, items) {
    return (
      <div key={title} className="menuCard">
        <h2 className="sectionTitle">{title}</h2>
        {items.map((item, index) => (
          <Card
            variant="outlined"
            key={index}
            style={{
              backgroundColor: "var(--card-background-colour)",
              margin: ".5rem",
            }}
            className="menuCardItem"
          >
            <h3>{item.itemData.name}</h3>
            <p>{item.itemData.descriptionPlaintext}</p>
            <p className="price">{getFormattedPrice(item)}</p>
          </Card>
        ))}
      </div>
    );
  }
  const catalogSections = [
    { title: "Sandos", items: sandoCatalogList },
    { title: "By the Piece", items: byThePieceCatalogList },
    { title: "Waffles", items: waffleCatalogList },
    { title: "Combos", items: comboCatalogList },
    { title: "Sides", items: sidesCatalogList },
  ];
  return (
    <div className="menuContainer">
      <Masonry
        columns={windowWidth <= 700 ? 1 : 2}
        spacing={2}
        defaultHeight={450}
        defaultColumns={4}
        defaultSpacing={1}
      >
        {catalogSections.map((section) =>
          renderCatalogSection(section.title, section.items)
        )}
      </Masonry>
      <ShoppingCartIcon
        id="cartIcon"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "3rem",
          padding: "1rem",
          borderRadius: "50%",
          border: "2px solid black",
        }}
        onClick={toggleCart}
      />
      <Drawer open={displayCart} onClose={toggleCart}>
        {shoppingCartDisplay}
      </Drawer>
    </div>
  );
}

export default Menu;
