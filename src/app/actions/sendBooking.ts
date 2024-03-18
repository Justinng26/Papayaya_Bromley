"use server";

import { Resend } from "resend";
import { validateBooking, getErrorMessage } from "../lib/utils";
import BookingFormEmail from "../email/BookingFormEmail";
import React from "react";

const resend = new Resend(process.env.BOOKING_API_KEY);

export const sendBooking = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const people = formData.get("people");
  const phone = formData.get("phone");
  const time = formData.get("time");
  const date = formData.get("date");

  if (
    !validateBooking(name, 500) ||
    !validateBooking(email, 500) ||
    !validateBooking(message, 5000) ||
    !validateBooking(people, 3) ||
    !validateBooking(phone, 500)
  ) {
    return {
      status: 400,
      message: "Invalid input",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Test <onboarding@resend.dev>",
      to: "justinng878@gmail.com",
      subject: "Papayaya - New booking request! ",
      reply_to: email as string,
      react: React.createElement(BookingFormEmail, {
        name: name as string,
        email: email as string,
        message: message as string,
        people: Number(people),
        phone: phone as string,
        time: time as string,
        date: date as string,
      }),
    });
  } catch (error: unknown) {
    console.error("Error type:", typeof error, "Error:", error);
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
