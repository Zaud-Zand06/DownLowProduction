import "./component_css/secretMenu.css";
import szechuanSandoIcon from "../assets/szechuanSandoIcon.png";
import Footer from "./Footer";
import Header from "./Header";

function SecretMenu() {
  return (
    <>
      <Header />
      <div className="backgroundImage" />
      <div className="secretMenuContainer">
        <h2>Nothing here yet.... were still cooking something up.......</h2>
        <div className="spin3d-simple">
          <img src={szechuanSandoIcon} alt="fried chicken sandwich" />
        </div>
        <h1>Thanks for being a fan :3</h1>
        <section className="mainBody">
          <section className="brands">
            <h3>have you checked out our other brands?</h3>
            <a href="https://www.dlburgers.ca">dl burgers</a>
            <a href="https://www.vennies.ca">vennies sub shop</a>
            <a href="https://www.thedrivecanteen.ca/">the drive canteen</a>
          </section>
          <section className="credits">
            <h3>Photos by</h3>
            <p>
              Alcantara Media <br /> &apos;chicken jimmy&apos;
            </p>
            <h3>made and designed by</h3>
            <p id="me">Alex Li</p>
            <p>
              fonts provided by{" "}
              <a href="http://www.onlinewebfonts.com">Web Fonts</a>
            </p>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default SecretMenu;
