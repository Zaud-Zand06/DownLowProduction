import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HeroCarousel() {
  return (
    <>
      <Carousel
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        emulateTouch={true}
        showArrows={false}
        width={500}
      >
        <img src="/src/assets/goKill.png" />
        <img src="/src/assets/jinBoot.jpg" />
        <img src="/src/assets/pilk.png" />
      </Carousel>
    </>
  );
}

export default HeroCarousel;
