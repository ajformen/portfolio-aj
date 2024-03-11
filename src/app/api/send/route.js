import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log('routes: ', email, subject, message);
  try {
    const data = await resend.emails.send({
      from: "",
      to: [toEmail, email],
    //   to: "dev.ajformen@gmail.com",
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    console.log('route data: ', data);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}