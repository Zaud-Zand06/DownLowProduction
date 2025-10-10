import "./component_css/heroContent.css";
import heroImage from "../assets/pumpkinSpiceDessertBar1600.avif";

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
        <h1>Our October Specials Have Arrived!</h1>
        <p>
          Come by and try our new Oktoberfest Sando and Fries! Featuring a new
          Grainy Dijon Mustard Mayo, Pickled sauerkraut coleslaw, and a new
          dilly dust!
          <br />
          While you&apos;re here, try our Pumpkin Spice Dessert Bar! Featuring
          your favourite fall flavours packed into a crispy, sweet dessert bar!
        </p>
      </div>
    </section>
  );
}

export default HeroContent;
