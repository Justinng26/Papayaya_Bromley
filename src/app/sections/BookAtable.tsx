"use client";

import React from "react";
import SectionTitle from "../components/SectionTitle";
import InputBox from "../components/InputBox";
import { sendBooking } from "../actions/sendBooking";
import SubmitBtn from "../components/SubmitBtn";

export default function BookAtable() {
  const handleTextChange = () => {};

  return (
    <section id="booking" className="booking">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Reservation" subtitle="Book a Table" />
      </div>

      <form
        action={async (formData) => {
          const { data, error } = await sendBooking(formData);

          if (error) {
            alert(error);
            return;
          }

          alert("email sent successfully");
        }}
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
              //   value={text.name}
              placeholder="Your Name"
              required
              onChange={handleTextChange}
              maxLength={300}
            />
          </div>

          <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
            <InputBox
              type="email"
              className="form-control"
              name="email"
              //   value={text.email}
              placeholder="Your Email"
              required
              onChange={handleTextChange}
              maxLength={300}
            />
          </div>

          <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
            <InputBox
              type="text"
              className="form-control"
              name="phone"
              //   value={text.phone}
              placeholder="Your Phone"
              required
              onChange={handleTextChange}
              maxLength={300}
            />
          </div>

          <div className="col-lg-4 col-md-6 form-group mt-3">
            <InputBox
              type="date"
              className="form-control"
              name="date"
              //   value={text.date}
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
              //   value={text.time}
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
              //   value={text.people}
              placeholder="Number of People"
              required
              onChange={handleTextChange}
              maxLength={100}
            />
          </div>
        </div>

        <div className="form-group mt-3">
          <textarea
            className="form-control"
            name="message"
            rows={5}
            placeholder="Message (Optional)"
            // value={text.message}
            onChange={handleTextChange}
          ></textarea>
        </div>

        <div className="text-center">
          <SubmitBtn />
        </div>
      </form>
    </section>
  );
}
