import { useState } from "react";
import "./component_css/catering.css";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@mui/material";

export default function Catering() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventDetails: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const validate = () => {
    let tempError = {};
    if (!formData.name) {
      tempError.name = "Name is required";
    }
    if (!formData.email) {
      tempError.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempError.email = "Email is invalid";
    }
    if (!formData.phone) {
      tempError.phone = "Phone is required";
    }
    if (!formData.eventDate) {
      tempError.eventDate = "Event Date is required";
    }
    setErrors(tempError);
    return Object.keys(tempError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const mailToLink = `mailto:sydney@dlchicken.ca?subject=Catering Request&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nEvent Date: ${formData.eventDate}\nEvent Details: ${formData.eventDetails}`
      )}`;
      window.location.href = mailToLink;
    }
  };
  return (
    <>
      <div id="cateringForm">
        <h1>Bring us to your next event!</h1>
        <p>
          Interested in large orders and catering? Feel free to send us an email
          to syndey@dlchicken.ca or use the form below and we&apos;ll get back
          to you with more information!
        </p>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal" error={!!errors.name}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input
              id="name"
              value={formData.name}
              onChange={handleChange}
              aria-describedby="name-helper-text"
            />
            <FormHelperText id="name-helper-text">
              {errors.name || "Please enter your full name."}
            </FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal" error={!!errors.email}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              aria-describedby="email-helper-text"
            />
            <FormHelperText id="email-helper-text">
              {errors.email || "We'll never share your email."}
            </FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal" error={!!errors.phone}>
            <InputLabel htmlFor="phone">Phone Number</InputLabel>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              aria-describedby="phone-helper-text"
            />
            <FormHelperText id="phone-helper-text">
              {errors.phone || "Please enter your phone number."}
            </FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal" error={!!errors.eventDate}>
            <InputLabel htmlFor="eventDate" shrink>
              Event Date
            </InputLabel>
            <Input
              id="eventDate"
              type="date"
              value={formData.eventDate}
              onChange={handleChange}
              aria-describedby="eventDate-helper-text"
            />
            <FormHelperText id="eventDate-helper-text">
              {errors.eventDate || "Please select the date of your event."}
            </FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal" error={!!errors.eventDetails}>
            <InputLabel htmlFor="eventDetails">Event Details</InputLabel>
            <Input
              id="eventDetails"
              multiline
              rows={3}
              value={formData.eventDetails}
              onChange={handleChange}
              aria-describedby="eventDetails-helper-text"
            />
            <FormHelperText id="eventDetails-helper-text">
              {errors.eventDetails ||
                "Please provide details about your event."}
            </FormHelperText>
          </FormControl>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
