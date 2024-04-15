"use client";

import { useState, FormEvent } from "react";

import SectionTitle from "../components/SectionTitle";
import InputBox from "../components/InputBox";
import { toast } from "react-hot-toast";
import "../styles/booking.css";

export default function Booking() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    people: "",
    message: "",
  });

  const sendBooking = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("../api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      console.log("Email sent successfully");
      setData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        people: "",
        message: "",
      }); // clear the form
      toast.success(
        `Hey ${data.name}, your booking request has been sent, we will contact you to confirm!`
      );
    }
  };

  return (
    <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up">
        <SectionTitle title="Reservation" subtitle="Book a Table" />

        <form
          onSubmit={sendBooking}
          className="booking-form"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
              <InputBox
                required
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="form-control"
                placeholder="Your Name"
                maxLength={50}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <InputBox
                required
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="form-control"
                placeholder="Your Email"
                maxLength={50}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
              <InputBox
                required
                type="text"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                className="form-control"
                placeholder="Your phone number"
                maxLength={50}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3">
              <InputBox
                required
                type="date"
                value={data.date}
                onChange={(e) => setData({ ...data, date: e.target.value })}
                className="form-control"
                placeholder="Date"
                maxLength={50}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3">
              <InputBox
                required
                type="time"
                value={data.time}
                onChange={(e) => setData({ ...data, time: e.target.value })}
                className="form-control"
                placeholder="Time"
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3">
              <InputBox
                required
                type="number"
                value={data.people}
                onChange={(e) => setData({ ...data, people: e.target.value })}
                className="form-control"
                placeholder="no. of people"
                maxLength={50}
              />
            </div>
          </div>

          <div className="form-group mt-3">
            <textarea
              className="form-control"
              rows={5}
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              placeholder="Message"
              required
              maxLength={300}
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit">Book a Table</button>
          </div>
        </form>
      </div>
    </section>
  );
}
