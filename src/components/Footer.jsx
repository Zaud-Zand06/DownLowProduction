import "./component_css/footer.css";
import { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import PropTypes from "prop-types";

Footer.propTypes = {
  setDisplayMenu: PropTypes.func.isRequired,
  setScrollToTop: PropTypes.func.isRequired,
};
function Footer({ setDisplayMenu, setScrollToTop }) {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const getLocations = async () => {
      const details = [
        {
          address: "905 Commercial Dr, Vancouver, BC V5L 2H2",
          description: "East Van",
          hours: "11:00am - 9:00pm Mon-Sat / 11:00am - 4:30pm Sun",
          number: "(604) 283-1385",
          gMapsLink: "https://maps.app.goo.gl/hieRWPg8Mhe8muDG7",
        },
        {
          address: "6065 University Blvd, Vancouver, BC V6T 0C5",
          description: "UBC",
          hours: "11:00am - 9:00pm Mon-Sat / 11:00am - 4:30pm Sun",
          number: "(604) 221-2755",
          gMapsLink: "https://maps.app.goo.gl/aZ5F1FjducPrUPiw7",
        },
      ];
      const locations = [];

      for (const detail of details) {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            detail.address
          )}&key=AIzaSyD6b5Z3lxK9tZ2uvruzTHQcAX6e_tnqX7k`
        );
        const data = await response.json();
        const location = data.results[0].geometry.location;
        locations.push({
          ...location,
          ...detail,
        });
      }

      setLocations(locations);
    };

    getLocations();
  }, []);

  return (
    <section id="footer">
      <section id="locationAndMap">
        <LoadScript googleMapsApiKey="AIzaSyD6b5Z3lxK9tZ2uvruzTHQcAX6e_tnqX7k">
          <GoogleMap
            mapContainerClassName="mapEmbed"
            center={locations[0]}
            zoom={window.innerWidth <= 700 ? 10 : 12}
          >
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={location}
                onClick={() => {
                  setSelectedLocation(location);
                }}
              />
            ))}
            {selectedLocation && (
              <InfoWindow
                position={selectedLocation}
                onCloseClick={() => {
                  setSelectedLocation(null);
                }}
              >
                <div>
                  <h2>{selectedLocation.description}</h2>
                  <h3>
                    <a href={selectedLocation.gMapsLink} target="_blank">
                      {selectedLocation.address}
                    </a>
                  </h3>
                  <p>{selectedLocation.hours}</p>
                  <p>{selectedLocation.number}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
        <section id="locationsInfo">
          <h1>Where we are</h1>
          {locations.map((location, index) => (
            <div key={index}>
              <h2>
                <a
                  onClick={() => {
                    setSelectedLocation(location);
                  }}
                >
                  {location.description}
                </a>
              </h2>
              <p>{location.hours}</p>
              <p>{location.address}</p>
              <p>{location.number}</p>
            </div>
          ))}
          <h1>Catering</h1>
          <p>
            Interested in large orders and catering? Click the link below for
            more information!
          </p>
          <a
            onClick={() => {
              setDisplayMenu("catering");
              setScrollToTop(true);
            }}
          >
            Click Here!
          </a>
        </section>
      </section>
    </section>
  );
}

export default Footer;
