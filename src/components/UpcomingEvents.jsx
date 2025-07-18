import "./component_css/upcomingEvents.css";
import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// add google calendar api to pull events from dlbrand events calendar

const calendarClientID =
  "415435788576-8h02j9udhgtl1of5q9nor1iqnckdnet8.apps.googleusercontent.com";
const calendarAPIKey = import.meta.env.VITE_CALENDAR_API;
const upcomingEventsList = [];

export default function UpcomingEvents() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <div className="backgroundImage"></div>
      <section id="eventsSection">
        <h1>Come find us around the city at these events!</h1>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=7beb9a770b57e614aeb5ddf51007975d77a3d739aed5ea639b21a65602a20af6%40group.calendar.google.com&ctz=America%2FVancouver"
          width={windowSize.width * 0.75}
          height={windowSize.height * 0.6}
        ></iframe>
      </section>
      <Footer />
    </>
  );
}
