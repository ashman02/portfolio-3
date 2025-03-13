import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sidhuashman02@gmail.com",
    pass: process.env.GOOGLE_APP_PASS,
  },
})

export async function sendVerificationEmail(
  email: string,
  fullName: string,
  message: string
) {
  try {
    const mailOptions = {
      from: email,
      to: "sidhuashman02@gmail.com",
      subject: `${fullName} has something to say.`,
      text: message,
      html: `<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Enquiry from the Portfolio</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        border: 1px solid #e0e0e0;
        border-radius: 8px;
      }
      .heading {
        font-size: 24px;
        margin-bottom: 20px;
      }
      .info {
        font-size: 16px;
        margin-bottom: 15px;
      }
      .info-title {
        font-weight: bold;
        color: #555;
      }
      .footer {
        margin-top: 20px;
        font-size: 14px;
        color: #777;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1 class="heading">New Contact Form Submission</h1>
      <p>You’ve received a new email from your portfolio contact form:</p>
      <p class="info"><span class="info-title">Name:</span> ${fullName}</p>
      <p class="info"><span class="info-title">Email:</span> ${email}</p>
      <p class="info"><span class="info-title">Message:</span></p>
      <p>${message}</p>
      <div class="footer">
        <p>Best regards,<br>Your Portfolio</p>
      </div>
    </div>
  </body>
</html>`,
    }
    await transporter.sendMail(mailOptions)
    return {
      success: true,
      message: "I got your message thank you.",
    }
  } catch (error) {
    console.log("Error sending verification email", error)
    return {
      success: false,
      message:
        "I did not get your message due to technical issue please try again.",
    }
  }
}
