import "../components/component_css/menu.css";
import { useState, useEffect } from "react";
import { Card } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Masonry } from "@mui/lab";
import { Drawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
  const [displayItemDrawer, setDisplayItemDrawer] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
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
        console.log("Catalog data:");
        console.log(data);
        const namedData = [];
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
            <a className="cartButton" onClick={() => fetchItemDetails(item.id)}>
              Add to Bag
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

  function toggleMenuItemDrawer() {
    setDisplayItemDrawer(!displayItemDrawer);
  }

  const fetchItemDetails = async (objectId) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/catalog/object/${objectId}`
      );
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      const data = await response.json();
      setSelectedItem(data.objects[0]);
      console.log(data.objects[0]);

      toggleMenuItemDrawer();
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };

  function addToCart(item, variationName) {
    const cartItem = {
      ...item,
      cartVariationName: variationName,
      cartId: Date.now() + Math.random(),
    };

    setCartInventory((prevInventory) => [...prevInventory, cartItem]);

    setCartTotal((prevTotal) => {
      const newTotal = parseFloat(prevTotal) + getFormattedPrice(item);
      return newTotal.toFixed(2);
    });
    toggleMenuItemDrawer();
  }
  function removeFromCart(cartId) {
    setCartInventory((prev) =>
      prev.map((cartItem) =>
        cartItem.cartId === cartId ? { ...cartItem, removing: true } : cartItem
      )
    );
    setTimeout(() => {
      setCartInventory((prevInventory) => {
        const index = prevInventory.findIndex(
          (cartItem) => cartItem.cartId === cartId
        );
        if (index < 0) return prevInventory;
        const newInventory = [...prevInventory];
        newInventory.splice(index, 1);
        return newInventory;
      });
      setCartTotal((prevTotal) => {
        const removedItem = cartInventory.find(
          (cartItem) => cartItem.cartId === cartId
        );
        if (!removedItem) return prevTotal;
        const newTotal = parseFloat(prevTotal) - getFormattedPrice(removedItem);
        return newTotal.toFixed(2);
      });
    }, 300);
  }
  function emptyCart() {
    setCartInventory([]);
    setCartTotal(0);
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
    <>
      <h1>Order Online</h1>
      <h2>{pickUpLocation}</h2>
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
        {catalogSections.map((section) =>
          renderCatalogSection(section.title, section.items)
        )}
      </Masonry>
      {/* THIS DRAWER IS FOR MENU ITEMS SO THAT YOU CAN SELECT ITEM VARIATIONS TO ADD TO CART */}
      <Drawer
        open={displayItemDrawer}
        onClose={toggleMenuItemDrawer}
        anchor="bottom"
        PaperProps={{
          style: {
            backgroundColor: "var(--background-colour)",
            borderTop: "2px solid var(--border-colour)",
          },
        }}
      >
        {selectedItem && (
          <div className="itemSelectionDrawer">
            <CloseIcon
              onClick={toggleMenuItemDrawer}
              style={{ position: "relative", left: "95%" }}
            />
            <h2>{selectedItem.itemData.name}</h2>
            <h3>Spice</h3>
            <Masonry columns={{ xs: 2, sm: 2, md: 4 }}>
              {selectedItem.itemData.variations.map((variation, index) => (
                <div
                  key={variation.id}
                  className="itemVariationSelection"
                  onClick={() =>
                    addToCart(selectedItem, variation.itemVariationData.name)
                  }
                >
                  <h3>{variation.itemVariationData.name}</h3>
                  <p className="itemVariationPrice">
                    {getFormattedPrice(selectedItem)}
                  </p>
                </div>
              ))}
            </Masonry>
          </div>
        )}
      </Drawer>
      <div id="cartIconContainer">
        <div id="cartIconCounter">{cartInventory.length}</div>
        <ShoppingCartIcon
          id="cartIcon"
          style={{
            padding: "1rem",
            borderRadius: "15px",
            border: "2px solid black",
          }}
          onClick={toggleCart}
        />
      </div>
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
          <h2>Bag</h2>
          {cartInventory.length === 0 && (
            <p id="addToCart">Add something to your bag!</p>
          )}
          <ul>
            {cartInventory.map((item) => (
              <li
                key={item.cartId}
                className={`cartItem${item.removing ? " removing" : ""}`}
              >
                <h3>{item.itemData.name}</h3>
                <h4>{item.cartVariationName}</h4>
                <p>{getFormattedPrice(item)}</p>
                <a onClick={() => removeFromCart(item.cartId)}>
                  Remove from Bag
                </a>
              </li>
            ))}
          </ul>
          <h2>Bag Total: ${cartTotal}</h2>
          <a onClick={() => emptyCart()}>Empty the Bag!</a>
        </div>
      </Drawer>
    </>
  );
}
