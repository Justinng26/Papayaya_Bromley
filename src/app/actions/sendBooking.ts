"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.BOOKING_API_KEY);

export const sendBooking = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const people = formData.get("people");
  const phone = formData.get("phone");
  const time = formData.get("time");
  const date = formData.get("date");

  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "justinng878@gmail.com",
    subject: "New booking",
    text: "test, hello world!",
  });
};
