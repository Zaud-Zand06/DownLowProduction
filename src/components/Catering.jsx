import "./component_css/catering.css";
import AccordianCateringMenus from "./AccordianCateringMenus";
import CateringForm from "./CateringForm";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Catering() {
  return (
    <>
      <Header />
      <div id="cateringForm">
        <h1>Bring us to your next event!</h1>
        <p>
          From Fried Chicken and Burgers to Specialty Subs we have a variety of
          options to choose from.
          <br />
          Click the tabs below for specfic catering menus, or fill out the form
          below to get in touch with us about your event!
        </p>
        <AccordianCateringMenus />
        <CateringForm />
      </div>
      <Footer />
    </>
  );
}
