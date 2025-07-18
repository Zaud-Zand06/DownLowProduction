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
        <h1>What's New This Month?</h1>
        <p>
          The Baller Sando! Chipotle Mayo, BnB Pickles, and our Signature
          Coleslaw, dusted with our new Hot Dill Spice!
          <br />
          Made proudly in collaboration with
          <a href="https://bucketsandborders.com/" target="_blank">
            {" "}
            Buckets and Borders{" "}
          </a>
          and
          <a href="https://www.girlswholeap.com/" target="_blank">
            {" "}
            Girls Who Leap
          </a>
          , for every sando purchased, $2 will be donated to Buckets and
          Borders.
        </p>
      </div>
    </section>
  );
}

export default HeroContent;
