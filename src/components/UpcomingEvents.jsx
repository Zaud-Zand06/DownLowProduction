import "./component_css/upcomingEvents.css";
import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

// add google calendar api to pull events from dlbrand events calendar

const calendarClientID =
  "415435788576-8h02j9udhgtl1of5q9nor1iqnckdnet8.apps.googleusercontent.com";
const calendarAPIKey = import.meta.env.VITE_CALENDAR_API;
const calendarID =
  "7beb9a770b57e614aeb5ddf51007975d77a3d739aed5ea639b21a65602a20af6@group.calendar.google.com";

export default function UpcomingEvents() {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?` +
            new URLSearchParams({
              key: calendarAPIKey,
              timeMin: new Date().toISOString(),
              maxResults: 10,
              singleEvents: true,
              orderBy: "startTime",
            })
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setEvents(data.tems || []);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching calendar events");
      } finally {
        setLoading(false);
      }
    };

    if (calendarAPIKey) {
      fetchEvents();
    } else {
      setError("Calendar API Key note found");
      setLoading(false);
    }
  }, []);

  const formatEventDate = (event) => {
    const start = event.start?.dateTime || event.start?.date;
    if (!start) return "No date";

    const date = new Date(start);
    return date.toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: event.start?.dateTime ? "numeric" : undefined,
      minute: event.start?.dateTime ? "2-digit" : undefined,
    });
  };

  return (
    <>
      <Header />
      <div className="backgroundImage"></div>
      <section id="eventsSection">
        <h1>Come find us around the city at these events!</h1>
        {/* {loading && <p>Loading Events....</p>} */}
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
