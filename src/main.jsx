import React from "react";
import ReactDOM from "react-dom/client";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Catering from "./components/Catering.jsx";
import Menu from "./components/Menu.jsx";
import SecretMenu from "./components/SecretMenu.jsx";
import DLKits from "./components/DLKits.jsx";
import UpcomingEvents from "./components/UpcomingEvents.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParallaxProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/secret" element={<SecretMenu />} />
          <Route path="/kits" element={<DLKits />} />
          <Route path="/events" element={<UpcomingEvents />} />
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  </React.StrictMode>
);
