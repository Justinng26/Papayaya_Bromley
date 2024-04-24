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
        `Hey ${data.name}, your booking request has been sent, we will contact you to confirm!`,
        {
          duration: 5000, // Duration in milliseconds (e.g., 5000 milliseconds = 5 seconds)
        }
      );
    }
  };

  // Function to generate array of dates
  const generateDates = () => {
    const dates = [];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );
      // Exclude Mondays and past dates
      if (date.getDay() !== 2 && date >= currentDate) {
        dates.push(date.toISOString().split("T")[0]);
      }
    }

    // Check for the next month
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    const daysInNextMonth = new Date(nextYear, nextMonth + 1, 0).getDate();

    for (let i = 1; i <= daysInNextMonth; i++) {
      const date = new Date(nextYear, nextMonth, i);
      // Exclude Mondays
      if (date.getDay() !== 2) {
        dates.push(date.toISOString().split("T")[0]);
      }
    }

    return dates;
  };

  const availableDates = generateDates();

  // Function to generate array of times
  const generateTimes = () => {
    const times = [];
    // Start and end times
    const startTime = 12; // 12: PM
    const endTime = 21; // 9:00 PM
    // Interval (in minutes) between each time slot
    const interval = 30; // 30 minutes

    for (let hour = startTime; hour <= endTime; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        // Exclude certain times (e.g., lunch break from 14:00 to 17:00)
        if (
          !(
            (
              (hour === 14 && minute >= 0) || // Between 14:00 and 14:30
              (hour === 15 && minute === 0) || // 15:00
              (hour === 15 && minute === 30) || // 15:30
              (hour === 16 && minute === 0) || // 16:00
              (hour === 16 && minute === 30) ||
              (hour === 21 && minute === 30)
            ) // 21:30
          )
        ) {
          // Format hour and minute strings
          const hourStr = hour < 10 ? `0${hour}` : `${hour}`;
          const minuteStr = minute === 0 ? "00" : `${minute}`;
          // Create time string
          const time = `${hourStr}:${minuteStr}`;
          times.push(time);
        }
      }
    }

    return times;
  };

  const availableTimes = generateTimes();

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
                maxLength={20}
              />
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3">
              {/* <InputBox
                required
                type="date"
                value={data.date}
                onChange={(e) => setData({ ...data, date: e.target.value })}
                className="form-control"
                placeholder="Date"
              /> */}
              <select
                required
                value={data.date}
                onChange={(e) => setData({ ...data, date: e.target.value })}
                className="form-control"
              >
                <option value="">Select Date</option>
                {availableDates.map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3">
              <select
                required
                value={data.time}
                onChange={(e) => setData({ ...data, time: e.target.value })}
                className="form-control"
              >
                <option value="">Select Time</option>
                {availableTimes.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-lg-4 col-md-6 form-group mt-3">
              {/* <InputBox
                required
                type="number"
                value={data.people}
                onChange={(e) => setData({ ...data, people: e.target.value })}
                className="form-control"
                placeholder="No. of people"
                maxLength={2}
                max={10}
              /> */}
              <select
                required
                value={data.people}
                onChange={(e) => setData({ ...data, people: e.target.value })}
                className="form-control"
              >
                <option value="">No. of People</option>
                {[...Array(13)].map((_, num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group mt-3">
            <textarea
              className="form-control"
              rows={5}
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              placeholder="Message"
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
