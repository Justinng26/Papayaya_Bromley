import { EmailTemplate } from "../../components/Email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.BOOKING_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("body", body);
    const { name, email, subject, message } = body;
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "justinng878@gmail.com",
      subject,
      reply_to: email,
      react: EmailTemplate({ firstName: name }),
      text: message,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }

  // if (data.status === "success") {
  //   return NextResponse.json({ message: "Email sent successfully" });
  //   }
  //   return NextResponse.json(data);
  // } catch (error) {
  //   console.log("Error sending email", error);
  // }
}
