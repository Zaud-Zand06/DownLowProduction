import "./component_css/heroContent.css";
import heroImage from "../assets/baller1600px.avif";

function HeroContent() {
  return (
    <section id="heroContent">
      <img
        src={heroImage}
        alt="spiced chicken sando with sauteed peppers and onions"
      />
      <div id="heroContentText">
        <h1>Whats new at DL?</h1>
        <p>
          For this monthly special we're teaming up with Brittania middle school
          to create the Baller Sando <br /> For every sando purchased 3 dollars
          goes to funding the Brittania Basketball program!
        </p>
      </div>
    </section>
  );
}

export default HeroContent;
