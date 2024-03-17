"use server";

import { Resend } from "resend";
import { validateBooking, getErrorMessage } from "../lib/utils";

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

  try {
    await resend.emails.send({
      from: "Test <onboarding@resend.dev>",
      to: "justinng878@gmail.com",
      subject: "New booking",
      reply_to: email as string,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nPeople: ${people}\nMessage: ${message}`,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
};
