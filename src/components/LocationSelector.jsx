import logo from '../assets/noTextLogo400px.webp';
import './component_css/locationSelector.css';

export default function LocationSelector({setLocation}) {
  const handleLocationSelect = (location) => {
    setLocation(location);
  };
  return (
    <>
      <h3>Thanks for Visiting DownLow Chicken!</h3>
      <img src={logo} className="spin3d-simple" />
      <section id="locationSelector">
        <p>Which location are you visiting?</p>
        <p
          className="locationOption"
          onClick={() => handleLocationSelect('Vancouver')}
        >
          Vancouver
        </p>
        <p
          className="locationOption"
          onClick={() => handleLocationSelect('Toronto')}
        >
          Toronto
        </p>
      </section>
    </>
  );
}
