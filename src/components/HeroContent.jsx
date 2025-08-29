import "./component_css/heroContent.css";
import heroImage from "../assets/baldySando1600crop.avif";

function HeroContent() {
  return (
    <section id="heroContent">
      <img
        src={heroImage}
        alt="soy glazed fried chicken sando with shredded and fried spam, coleslaw and lemon mayo sauce"
        loading="eager"
        decoding="async"
      />
      <div id="heroContentText">
        <h1>What's New This Month?</h1>
        <p>
          The Baldy Sando! Made with love and in Collaboration with{" "}
          <a href="https://baldyloxvintage.com/" target="_blank">
            BaldyLox Vintage
          </a>{" "}
          and featuring a crispy piece of Soy Glazed Chicken, shredded and fried
          Halal Chicken Spam, our famous Coleslaw and a new Lemon-y Rookie Mayo!
          <br />
          Available from Sept 2, to the end of the month! Get it while you can!
        </p>
      </div>
    </section>
  );
}

export default HeroContent;
