import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json()

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["nitinagrawal9197@gmail.com"],
      subject: subject || "New Contact Message",
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error(error)
    return Response.json({ success: false })
  }
}