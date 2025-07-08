import Header from "./Header";
import Footer from "./Footer";
import "./component_css/dlkits.css";

function DLKits() {
  return (
    <>
      <Header />
      <div className="backgroundImage" />
      <div id="DLKitsContainer">
        <p>
          DownLow Express is a collaborative effort between DL Chicken and DL
          Burgers to bring some of the best chicken and burgers vancouver has to
          offer, to Kitsilano Beach!
        </p>
        <p>
          DL Express will be running all summer through the Kitsilano Pool
          Concession. Featuring fan favourites from both DL Chicken and DL
          Burgers, DL Express also offers some special items that you can only
          get here!
        </p>
        <p>
          Come visit us between 3-10 Wednesday-Friday, or 12-10 on the Weekends!
        </p>
        {/* This is where the menu is stored. any adjustments to the menu must be done here */}
        <details>
          <summary>Click to See the DL Express Menu</summary>
          <section id="dlkitsMenu">
            <span className="dlkitsMenuItem">
              <h2>The OG Sando</h2>
              <p className="price">
                A classic Nashville style chicken sandwich: 18.99
              </p>
              <p className="price">Add a side: 23.99</p>
            </span>
            <span className="dlkitsMenuItem">
              <h2>Burrito on the DL</h2>
              <p className="price">
                Crispy fried chicken, wrapped in a warm flour tortilla: 16.99
              </p>
              <p className="price">Add a side: 20.99</p>
            </span>
            <span className="dlkitsMenuItem">
              <h2>Chicken Tenders</h2>
              <p className="price">4 Crispy chicken tenders: 19.99</p>
              <p className="price">7 Crispy chicken tenders: 32.99</p>
              <p className="price">15 Crispy chicken tenders: 69.99</p>
            </span>
            <span className="dlkitsMenuItem">
              <h2>Swagyu Dog</h2>
              <p className="price">
                Wagyu Hot Dog, wrapped in a warm Brioche Bun: 8.99
              </p>
              <p className="price">Add a side: 12.99</p>
            </span>
            <span className="dlkitsMenuItem">
              <h2>Classic Cheeseburger</h2>
              <p className="price">
                Grilled 6oz Patty, Cheese, Pickles and Onions: 18.99
              </p>
              <p className="price">Add a side: 23.99</p>
            </span>
            <span className="dlkitsMenuItem">
              <h2>Griddled Onion Burger</h2>
              <p className="price">
                Grilled 6oz Patty, Pickles and Thinly-shaved Onions: 18.99
              </p>
              <p className="price">Add a side: 23.99</p>
            </span>
            <span className="dlkitsMenuItem">
              <h2>Kits Beach Burger</h2>
              <p className="price">Grilled 6oz Patty, L.T.O.P: 18.99</p>
              <p className="price">Add a side: 23.99</p>
            </span>
            <span className="dlkitsMenuItem">
              <h2>Grab and Go Sandwiches</h2>
              <p className="price">Egg Salad Sandwich: 8.99</p>
              <p className="price">Tuna Sandwich: 8.99</p>
              <p className="price">Veggie Sandwich: 8.49</p>
            </span>
            <span className="dlkitsMenuItem">
              <h2>Sides</h2>
              <p className="price">Fries: 5.25</p>
              <p className="price">Potato Salad: 5.25</p>
              <p className="price">Coleslaw: 5.25</p>
            </span>
          </section>
        </details>
      </div>
      <Footer />
    </>
  );
}

export default DLKits;
