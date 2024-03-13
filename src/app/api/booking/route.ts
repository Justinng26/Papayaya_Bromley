import { bookings } from "../../data/data";

export async function GET() {
  return Response.json(bookings);
}

// This is a POST request, so we need to parse the request body as JSON. It is responsible for creating a new booking and adding it to the bookings array.
export async function POST(request: Request) {
  const booking = await request.json();
  delete booking.validate;
  const newBooking = {
    id: bookings.length + 1,
    details: booking,
  };
  bookings.push(newBooking);
  return new Response(JSON.stringify(newBooking), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
