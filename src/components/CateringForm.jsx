import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
} from "@mui/material";

export default function CateringForm() {
  const [formData, setFormData] = useState({
    whichRestaurant: "",
    cateringMethod: "",
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventAttendees: "",
    eventDetails: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, id, value } = e.target;
    const key = id || name;
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [key]: "",
    }));
  };

  const validate = () => {
    let tempError = {};
    if (!formData.whichRestaurant) {
      formData.whichRestaurant = "All Locations";
    }
    if (!formData.cateringMethod) {
      formData.cateringMethod = "Pick Up";
    }
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
    if (!/^\d+$/.test(formData.eventAttendees)) {
      tempError.eventAttendees = "The number of attendees must be a number";
    }
    if (formData.eventAttendees < 10) {
      tempError.eventAttendees =
        "The minimum number of guests we cater for is 10";
    }
    setErrors(tempError);
    return Object.keys(tempError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const mailToLink = `mailto:sydney@dlchickenshack.ca?subject=Catering Request&body=${encodeURIComponent(
        `Catering Menu: ${formData.whichRestaurant}\nCatering Service Style: ${formData.cateringMethod}\nName: ${formData.name}\nEmail: ${formData.email}\nPhone Number: ${formData.phone}\nEvent Date: ${formData.eventDate}\nNumber of Attendees: ${formData.eventAttendees}\nEvent Details: ${formData.eventDetails}`
      )}`;
      window.location.href = mailToLink;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth margin="normal" error={!!errors.whichRestaurant}>
        <FormLabel id="whichRestaurantLabel">
          Which restaurant are you interested in catering from?
        </FormLabel>
        <RadioGroup
          aria-labelledby="whichRestaurantLabel"
          defaultValue="All Locations"
          name="whichRestaurant"
          row
          onChange={handleChange}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FormControlLabel
            value="All Locations"
            control={<Radio />}
            label="All Locations"
          />
          <FormControlLabel
            value="DL Chicken"
            control={<Radio />}
            label="DL Chicken"
          />
          <FormControlLabel
            value="DL Burgers"
            control={<Radio />}
            label="DL Burgers"
          />
          <FormControlLabel
            value="Vennies"
            control={<Radio />}
            label="Vennie's Subs"
          />
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth margin="normal" error={!!errors.cateringMethod}>
        <FormLabel id="cateringMethod">
          What kind of catering are you interested in?
        </FormLabel>
        <RadioGroup
          aria-labelledby="cateringMethodLabel"
          defaultValue="Pick Up"
          name="cateringMethod"
          row
          onChange={handleChange}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FormControlLabel
            value="Pick Up"
            control={<Radio />}
            label="Pick Up"
          />
          <FormControlLabel
            value="Delivery"
            control={<Radio />}
            label="Delivery"
          />
        </RadioGroup>
      </FormControl>

      <FormControl fullWidth margin="normal" error={!!errors.name}>
        <InputLabel htmlFor="name">Name</InputLabel>
        <Input
          id="name"
          value={formData.name}
          onChange={handleChange}
          aria-describedby="name-helper-text"
        />
        {errors.name && <FormHelperText>{errors.name}</FormHelperText>}
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
        {errors.email && <FormHelperText>{errors.email}</FormHelperText>}
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
        {errors.phone && <FormHelperText>{errors.phone}</FormHelperText>}
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

      <FormControl fullWidth margin="normal" error={!!errors.eventAttendees}>
        <InputLabel htmlFor="eventAttendees">
          How many people will be attending?
        </InputLabel>
        <Input
          id="eventAttendees"
          value={formData.eventAttendees}
          onChange={handleChange}
          aria-describedby="eventAttendees-helper-text"
        />
        <FormHelperText id="eventAttendees-helper-text">
          {errors.eventAttendees || "Approximate numbers are fine."}
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
          Please provide any additional details about your event. If there are
          any allergies or dietary restrictions we should be aware of, please
          let us know here.
        </FormHelperText>
      </FormControl>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}
