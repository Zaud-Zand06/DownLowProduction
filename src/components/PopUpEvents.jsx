import { useState, useEffect } from "react";
import "./component_css/popUpEvents.css";

export default function PopUpEvents({ isOpen, onClose, children }) {
  useEffect(() => {
    if (!isOpen) return;
    // convert this to an onclick function that exits
    function handleEscape(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div id="modalEventPopUp" onClick={onClose}>
      <div className="modalOverlay">
        <p>
          We&apos;re going to be at the Birds & Bubbles Event hosted by
          Vancouver Club!
          <br />
          Grab your tickets here by clicking the link below and sending an email
          to Vancouver Club!
        </p>
        <a href="mailto:migle@vancouverclub.ca?subject=Birds%20%26%20Bubbles%20Event%20Tickets">
          Vancouver Club
        </a>
      </div>
    </div>
  );
}
