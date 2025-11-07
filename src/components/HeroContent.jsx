import './component_css/heroContent.css';
import heroImage from '../assets/provencal1600Px.avif';

function HeroContent() {
  return (
    <section id="heroContent">
      <img
        src={heroImage}
        alt="fried chicken sando with sauteed veggie slaw and herbs de provence spices"
        loading="eager"
        decoding="async"
      />
      <div id="heroContentText">
        <h1>The New Provençal Sando!</h1>
        <p>
          Come by and try our newest monthly special! Featuring a sauteed veggie
          slaw, a new Herbs de Provence Spice dust and a limited-time Chicken
          Gravy mayo! Available for all of November only!
          <br />
          While you&apos;re here, make sure to try our new Hoe Cake sides! A
          warm, savoury cornmeal flatbread, perfect for soaking up any extra
          sauces and spices!
        </p>
      </div>
    </section>
  );
}

export default HeroContent;
