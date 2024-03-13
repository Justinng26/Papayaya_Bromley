"use client";

import { useState } from "react";
import "../styles/booking.css";
import SectionTitle from "../components/SectionTitle";
import InputBox from "../components/InputBox";

export default function Booking() {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    message: "",
    validate: "",
  };

  const [text, setText] = useState(initialState);

  // This function will handle the input change by updating the state of the text.
  const handleTextChange = (e: Event | any) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value, validate: "" });
  };

  const handleSubmitBooking = async (e: Event | any) => {
    e.preventDefault();
    if (
      text.name === "" ||
      text.email === "" ||
      text.date === "" ||
      text.time === ""
    ) {
      setText({ ...text, validate: "Please fill in the required fields" });
    }
  };

  return (
    <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Reservation" subtitle="Book a Table" />

        <form
          onSubmit={handleSubmitBooking}
          className="booking-form"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
              <InputBox
                type="text"
                name="name"
                className="form-control"
                value={text.name}
                placeholder="Your Name"
                required
                onChange={handleTextChange}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <InputBox
                type="email"
                className="form-control"
                name="email"
                value={text.email}
                placeholder="Your Email"
                required
                onChange={handleTextChange}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <InputBox
                type="text"
                className="form-control"
                name="phone"
                value={text.phone}
                placeholder="Your Phone"
                required
                onChange={handleTextChange}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3">
              <InputBox
                type="date"
                className="form-control"
                name="date"
                value={text.date}
                placeholder="Date"
                required
                onChange={handleTextChange}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3">
              <InputBox
                type="time"
                className="form-control"
                name="time"
                value={text.time}
                placeholder="Time"
                required
                onChange={handleTextChange}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3">
              <InputBox
                type="number"
                className="form-control"
                name="people"
                value={text.people}
                placeholder="Number of People"
                required
                onChange={handleTextChange}
              />
            </div>
          </div>

          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              rows={5}
              placeholder="Message (Optional)"
              value={text.message}
              onChange={handleTextChange}
            ></textarea>
          </div>

          <div className="mb-3">
            {text.validate === "loading" && (
              <div className="loading">Send Booking</div>
            )}
            {text.validate === "incomplete" && (
              <div className="error-message">
                Please fill in the required fields
              </div>
            )}
            {text.validate === "success" && (
              <div className="sent-message">
                Your booking request was sent. We will call back or send an
                Email to confirm your reservation. Thank you!
              </div>
            )}
            {text.validate === "error" && (
              <div className="error-message">
                There was an error while sending your booking request
              </div>
            )}
          </div>

          <div className="text-center">
            <button type="submit">Book a Table</button>
          </div>
        </form>
      </div>
    </section>
  );
}
