import "./component_css/heroContent.css";
import heroImage from "../assets/cowboySando1600.avif";

function HeroContent() {
  return (
    <section id="heroContent">
      <img
        src={heroImage}
        alt="spiced chicken sando with sauteed peppers and onions"
      />
      <div id="heroContentText">
        <h1>What's New This Month?</h1>
        <p>
          The Cowboy Sando! Made with our brand-new Cowboy Ranch and dusted with
          our new Cowboy Spice dust, topped with our Signature Slaw and BnB
          Pickles!
          <br />
          Only available for August so come get it while it's around!
        </p>
      </div>
    </section>
  );
}

export default HeroContent;
