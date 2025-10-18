
import dotenv from 'dotenv'; // load .env automatically

dotenv.config(); 
import nodemailer from "nodemailer";



// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Generic mailer function
export const mailer = async (to: string, subject: string, text: string) => {
  const mailOptions = {
    from: `My App <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html: `<p>${text}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("❌ Email failed:", error);
    throw error;
  }
};