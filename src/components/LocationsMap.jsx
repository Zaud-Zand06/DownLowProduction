import { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

function LocationsMap() {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const getLocations = async () => {
      const addresses = [
        "905 Commercial Dr, Vancouver, BC V5L 2H2",
        "6065 University Blvd, Vancouver, BC V6T 0C5",
      ]; // Replace with your addresses
      const details = [
        {
          address: "905 Commercial Dr, Vancouver, BC V5L 2H2",
          description: "DownLow Chicken Shack Commercial Drive",
          hours: "11:00am - 9:00pm Mon-Sat / 11:00am - 4:30pm Sun",
          number: "(604) 283-1385",
        },
        {
          address: "6065 University Blvd, Vancouver, BC V6T 0C5",
          description: "DownLow Chicken Shack UBC",
          hours: "11:00am - 9:00pm Mon-Sat / 11:00am - 4:30pm Sun",
          number: "(604) 283-1385",
        },
      ];
      const locations = [];

      for (const address of addresses) {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            address
          )}&key=AIzaSyD6b5Z3lxK9tZ2uvruzTHQcAX6e_tnqX7k`
        );
        const data = await response.json();
        const location = data.results[0].geometry.location;
        locations.push({
          ...location,
          address,
          ...details[addresses.indexOf(address)],
        });
        console.log(locations);
      }

      setLocations(locations);
    };

    getLocations();
  }, []);

  return (
    <div>
      {/* Interactive map */}
      <LoadScript googleMapsApiKey="AIzaSyD6b5Z3lxK9tZ2uvruzTHQcAX6e_tnqX7k">
        <GoogleMap
          mapContainerClassName="mapEmbed"
          center={locations[0]}
          zoom={12}
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
                <h3>{selectedLocation.address}</h3>
                <p>{selectedLocation.hours}</p>
                <p>{selectedLocation.number}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default LocationsMap;
