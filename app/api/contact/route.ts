import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }

  const { data, error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "mehmetgencv@gmail.com",
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  })

  if (error) {
    console.error("[Resend error]", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  console.log("[Resend success]", data)

  return NextResponse.json({ success: true })
}
