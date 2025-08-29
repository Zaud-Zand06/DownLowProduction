import "./component_css/parallaxSection.css";
import { Parallax } from "react-scroll-parallax";
import waffleCombo from "../assets/waffleCombo.avif";
import dlChickenMelt from "../assets/dlChickenMelt.avif";

function ParallaxSection() {
  return (
    <section className="parallaxContainer">
      <Parallax className="parallaxText" speed={30}>
        <p>
          Since our inception, DownLow has been proud to serve hormone free, GMO
          free and Halal certified chicken from Rossdown Farms. Hand dredged and
          deep fried, our never frozen, always fresh chicken is happily sat atop
          entirely house-made sauces and sides. Our dedicated team of cooks has
          been commited to providing the best Nashville style fried chicken
          Vancouver has to offer!
        </p>
      </Parallax>
      <Parallax className="parallaxImage" speed={-20}>
        <img
          src={dlChickenMelt}
          alt="A fried chicken sandwhich with carmelized onions and cheese dust"
          loading="lazy"
          decoding="async"
        />
      </Parallax>
      <Parallax className="parallaxText" speed={30}>
        <p>
          From our juicy fried chicken to our custom dessert bars, we only
          source the highest quality, local ingredients for our recipes. Come in
          and ask our dedeicated team of cooks about any of our menu items!
        </p>
      </Parallax>
      <Parallax className={`parallaxText rightColumn`} speed={30}>
        <p>
          Our team is dedicated to providing the best possible experience for
          our customers. We are always looking for ways to improve our service
          and our menu. If you have any feedback, don&apos;t hesitate to let us
          know!
        </p>
      </Parallax>
      <Parallax className="parallaxImage2" speed={-20}>
        <img
          src={waffleCombo}
          alt="A fried chicken sandwhich with waffles, a can of sweet tea, and a chocolate cake"
          loading="lazy"
          decoding="async"
        />
      </Parallax>
      <Parallax className="parallaxText" speed={30}>
        <p>
          We can accomodate most dietary restrictions! Get in touch with us or
          come ask us in person for more information about what we can do for
          you!
        </p>
      </Parallax>
    </section>
  );
}

export default ParallaxSection;
