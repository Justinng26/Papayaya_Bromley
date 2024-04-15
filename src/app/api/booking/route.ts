// import { bookings } from "../../data/data";

// export async function GET() {
//   return Response.json(bookings);
// }

// // This is a POST request, so we need to parse the request body as JSON. It is responsible for creating a new booking and adding it to the bookings array.
// export async function POST(request: Request) {
//   const booking = await request.json();
//   delete booking.validate;
//   const newBooking = {
//     id: bookings.length + 1,
//     details: booking,
//   };
//   bookings.push(newBooking);
//   return new Response(JSON.stringify(newBooking), {
//     headers: { "Content-Type": "application/json" },
//     status: 201,
//   });
// }
import BookingFormEmail from "../../components/BookingFormEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.BOOKING_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("body", body);
    const { name, email, message, people, phone, time, date } = body;
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "justinng878@gmail.com",
      subject: "Papayaya - New booking request!",
      reply_to: email,
      react: BookingFormEmail({
        name: name as string,
        email: email as string,
        message: message as string,
        people: people as number,
        phone: phone as string,
        time: time as string,
        date: date as string,
      }),
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
