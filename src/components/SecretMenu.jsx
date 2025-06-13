import "./component_css/secretMenu.css";
import szechuanSandoIcon from "../assets/szechuanSandoIcon.png";
import Footer from "./Footer";
import Header from "./Header";

function SecretMenu() {
  return (
    <>
      <Header />
      <div className="backgroundImage"></div>
      <div className="secretMenuContainer">
        <h2>Nothing here yet.... were still cooking something up.......</h2>
        <div className="spin3d-simple">
          <img src={szechuanSandoIcon} alt="fried chicken sandwich" />
        </div>
        <h1>Thanks for being a fan :3</h1>
        <p>have you checked out our other brands?</p>
        <p>dl burgers</p>
        <p>vennies sub shop</p>
        <p>the drive canteen</p>
        <p>sunday pies</p>
        <span>
          <h3>Photos by</h3>
          <p>Alcantara Media</p>
          <p>"chicken jimmy"</p>
          <h3>made and designed by</h3>
          <p>Alex Li</p>
          <h4>fonts</h4>
          <a href="http://www.onlinewebfonts.com">Web Fonts</a>
        </span>
      </div>
      <Footer />
    </>
  );
}

export default SecretMenu;
