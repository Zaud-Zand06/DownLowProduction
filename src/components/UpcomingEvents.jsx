import "./component_css/upcomingEvents.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// add google calendar api to pull events from dlbrand events calendar
export default function UpcomingEvents() {
  return (
    <>
      <Header />
      <div className="backgroundImage"></div>
      <section id="eventsSection"></section>
      <Footer />
    </>
  );
}
