import "./component_css/credits.css";

function Credits() {
  return (
    <div className="creditsPage">
      <div className="creditContainer">
        <h2>Design and Development</h2>
        <a href="" target="_blank">
          Alex Li
        </a>
      </div>
      <div className="creditContainer">
        <h2>Photography</h2>
        <a href="https://www.instagram.com/alcantara_media/" target="_blank">
          Alcantara Media
        </a>
      </div>
      <div className="creditContainer">
        <h2>Fonts</h2>
        <a href="http://www.onlinewebfonts.com">Web Fonts</a>
      </div>
    </div>
  );
}

export default Credits;
