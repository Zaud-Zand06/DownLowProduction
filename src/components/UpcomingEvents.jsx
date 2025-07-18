import "./component_css/upcomingEvents.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// add google calendar api to pull events from dlbrand events calendar

const calendarClientID =
  "415435788576-8h02j9udhgtl1of5q9nor1iqnckdnet8.apps.googleusercontent.com";
const calendarAPIKey = import.meta.env.VITE_CALENDAR_API;
const upcomingEventsList = [];

export default function UpcomingEvents() {
  return (
    <>
      <Header />
      <div className="backgroundImage"></div>
      <section id="eventsSection">
        <h1>Come find us around the city at these events!</h1>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=7beb9a770b57e614aeb5ddf51007975d77a3d739aed5ea639b21a65602a20af6%40group.calendar.google.com&ctz=America%2FVancouver"
          width="800"
          height="600"
        ></iframe>
      </section>
      <Footer />
    </>
  );
}
