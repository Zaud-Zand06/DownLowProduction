import "./component_css/footer.css";
import { useState } from "react";
import {
  AdvancedMarker,
  Map,
  APIProvider,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import markerImage from "../assets/favicon32px.webp";

const gMapsAPI = import.meta.env.VITE_MAPS_API;

function Footer() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const locations = [
    {
      address: "905 Commercial Dr, Vancouver, BC V5L 2H2",
      description: "East Van",
      hours: "11am - 9pm Mon-Sat / 11am - 4:30pm Sun",
      number: "(604) 283-1385",
      gMapsLink: "https://maps.app.goo.gl/hieRWPg8Mhe8muDG7",
      lat: 49.27630749999999,
      lng: -123.0697264,
    },
    {
      address: "6065 University Blvd, Vancouver, BC V6T 0C5",
      description: "UBC",
      hours: "11am - 9pm Mon-Sat / 11am - 4:30pm Sun",
      number: "(604) 221-2755",
      gMapsLink: "https://maps.app.goo.gl/aZ5F1FjducPrUPiw7",
      lat: 49.2662207,
      lng: -123.2475804,
    },
    {
      address: "2035 Cornwall Ave, Vancouver, BC V6K 1B7",
      description: "DL Express",
      hours: "3pm - 10pm Mon-Fri / 12pm - 10pm Sat-Sun",
      gMapsLink: "https://maps.app.goo.gl/RbyMvsbYkiFKdnAQA",
      lat: 49.272870673864084,
      lng: -123.15752788901693,
    },
  ];

  return (
    <section id="footer">
      <section id="locationAndMap">
        <APIProvider apiKey={gMapsAPI} region="CA" version="beta">
          <Map
            className="mapEmbed"
            defaultCenter={locations[2]}
            defaultZoom={12}
            colorScheme="FOLLOW_SYSTEM"
            disableDefaultUI={true}
            controlled={false}
            mapId="c467762c07f903327945a653"
          >
            {locations.map((location, index) => (
              <AdvancedMarker
                key={index}
                position={location}
                onClick={() => {
                  setSelectedLocation(location);
                }}
              >
                <img src={markerImage} width={32} height={32} />
              </AdvancedMarker>
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
                    <a
                      className="gMapsLink"
                      href={selectedLocation.gMapsLink}
                      target="_blank"
                    >
                      {selectedLocation.address}
                    </a>
                  </h3>
                  <p>{selectedLocation.hours}</p>
                  <p>{selectedLocation.number}</p>
                </div>
              </InfoWindow>
            )}
          </Map>
        </APIProvider>
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
