import React from "react";
import "./component_css/catering.css";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@mui/material";

export default function Catering() {
  return (
    <>
      <div id="cateringInfo">{/* TODO: add more info about catering */}</div>
      <div id="cateringForm">
        <h1>Bring us to your next event!</h1>
        <p>
          Interested in large orders and catering? Feel free to send us an email
          to syndey@dlchicken.ca or use the form below and we&apos;ll get back
          to you with more information!
        </p>
        <form>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" aria-describedby="name-helper-text" />
            <FormHelperText id="name-helper-text">
              Please enter your full name.
            </FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              type="email"
              aria-describedby="email-helper-text"
            />
            <FormHelperText id="email-helper-text">
              We&apos;ll never share your email.
            </FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="phone">Phone Number</InputLabel>
            <Input id="phone" type="tel" aria-describedby="phone-helper-text" />
            <FormHelperText id="phone-helper-text">
              Please enter your phone number.
            </FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="eventDate" shrink>
              Event Date
            </InputLabel>
            <Input
              id="eventDate"
              type="date"
              aria-describedby="eventDate-helper-text"
            />
            <FormHelperText id="eventDate-helper-text">
              Please select the date of your event.
            </FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="eventDetails">Event Details</InputLabel>
            <Input
              id="eventDetails"
              multiline
              rows={3}
              aria-describedby="eventDetails-helper-text"
            />
            <FormHelperText id="eventDetails-helper-text">
              Please provide details about your event.
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
