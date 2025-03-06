import "../components/component_css/menu.css";
import { useState, useEffect } from "react";
import { Card } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Masonry } from "@mui/lab";
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

export default function OrderOnline() {
  const [pickUpLocation, setPickUpLocation] = useState(null);
  const [displayCart, setDisplayCart] = useState(false);
  const [cartInventory, setCartInventory] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [sandoCatalogList, setSandoCatalogList] = useState([]);
  const [byThePieceCatalogList, setByThePieceCatalogList] = useState([]);
  const [waffleCatalogList, setWaffleCatalogList] = useState([]);
  const [comboCatalogList, setComboCatalogList] = useState([]);

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
    return parseFloat((priceInCents / 100).toFixed(2));
  }
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
            <p className="price">${getFormattedPrice(item)}</p>
            <a className="cartButton" onClick={() => addToCart(item)}>
              Add to Cart
            </a>
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
  ];

  function addToCart(item) {
    setCartInventory((prevInventory) => [...prevInventory, item]);
    setCartTotal((prevTotal) => {
      const newTotal = parseFloat(prevTotal) + getFormattedPrice(item);
      return newTotal.toFixed(2);
    });
  }
  function removeFromCart(item) {
    setCartInventory((prev) =>
      prev.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, removing: true } : cartItem
      )
    );
    setTimeout(() => {
      setCartInventory((prevInventory) => {
        const index = prevInventory.findIndex(
          (cartItem) => cartItem.id === item.id
        );
        if (index < 0) return prevInventory;
        const newInventory = [...prevInventory];
        newInventory.splice(index, 1);
        return newInventory;
      });
      setCartTotal((prevTotal) => {
        const newTotal = parseFloat(prevTotal) - getFormattedPrice(item);
        return newTotal.toFixed(2);
      });
    }, 300);
  }
  function toggleCart() {
    setDisplayCart(!displayCart);
  }

  if (pickUpLocation === null) {
    return (
      <div id="locationSelection">
        <h1>Choose a location</h1>
        <button
          className="locationButton"
          onClick={() => setPickUpLocation("East Van")}
        >
          East Van
        </button>
        <button
          className="locationButton"
          onClick={() => setPickUpLocation("UBC")}
        >
          UBC
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1>Order Online</h1>
      <h2>{pickUpLocation}</h2>
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
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
      <Drawer
        open={displayCart}
        onClose={toggleCart}
        PaperProps={{
          style: {
            backgroundColor: "var(--background-colour)",
            minWidth: "20%",
          },
        }}
      >
        <div id="shoppingCart">
          <h2>Cart</h2>
          <ul>
            {cartInventory.map((item) => (
              <li
                key={item.id}
                className={`cartItem${item.removing ? " removing" : ""}`}
              >
                <h3>{item.itemData.name}</h3>
                <p>{getFormattedPrice(item)}</p>
                <a onClick={() => removeFromCart(item)}>Remove from Cart</a>
              </li>
            ))}
          </ul>
          <h2>Cart Total: ${cartTotal}</h2>
        </div>
      </Drawer>
    </div>
  );
}
