const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const requestIp = require("request-ip");
const serverless = require("serverless-http");

const app = express();
const PORT = 5000;

// CORS config
app.use(
  cors({
    origin: "*", // allow all origins (update for production)
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Middleware
app.use(bodyParser.json());
app.use(requestIp.mw());

// Health check
app.get("/api/home", (req, res) => {
  console.log("GET /home: Health check");
  res.status(200).json("Backend working");
});

// Nodemailer transport config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "info@vr2tech.in",
    pass: "lfuq qrtw uyyh imfd", // secure: use environment variable in production
  },
});

// Auto-reply to user
const sendAutoReply = async (userEmail, userName) => {
  const mailOptions = {
    from: `"VR2Tech.in" <info@vr2tech.in>`,
    to: userEmail,
    subject: "Thank You for Your Interest!",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; color: #333;">
        <div style="background-color:rgb(154, 3, 3); color: white; padding: 15px 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 22px;">Thank You for Contacting Us!</h1>
        </div>

        <div style="padding: 20px;">
          <h2 style="color:rgb(129, 3, 3);">Hello ${userName},</h2>
          <p>Thank you for reaching out to the <strong>VR2 Technologies</strong>!</p>
          <p>We appreciate your interest and will get in touch with you shortly to assist you further.</p>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;" />

          <p style="font-size: 14px; color: #555;">
            In the meantime, if you have any questions, feel free to WhatsApp or call us anytime at 
            <strong><a href="tel:+918309436998" style="color:rgb(146, 6, 6); text-decoration: none;">+91-8309436998</a></strong>.
          </p>
        </div>

        <div style="background-color:rgb(223, 221, 221); padding: 15px 20px; font-size: 14px; text-align: center; color: #666;">
          <p style="margin: 0; font-style: italic;">Warm regards,<br/>VR2Tech Team</p>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

// Admin notification email
const notifyAdmin = async (formData) => {
  const mailOptions = {
    from: `"New Lead - VR2Tech.in" <info@vr2tech.in>`,
    to: "info@vr2tech.in",
    subject: "New Lead - VR2Tech.in",
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
        <div style="background-color:rgb(169, 4, 4); color: white; padding: 15px 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Inquiry Received</h1>
        </div>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tbody>
            <tr style="background-color: #f7f7f7;">
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Name</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Email</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.email}</td>
            </tr>
            <tr style="background-color: #f7f7f7;">
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Mobile</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.mobile}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">IP Address</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.ip}</td>
            </tr>
            <tr style="background-color: #f7f7f7;">
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Page URL</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.webpage_url}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Page Title</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.page_title}</td>
            </tr>
            <tr style="background-color: #f7f7f7;">
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Submitted At</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.submission_datetime}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; border: 1px solid #ddd;">Message / Plan</td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.message}</td>
            </tr>
          </tbody>
        </table>

        <div style="padding: 15px 20px; font-size: 14px; background-color: #f0f0f0; border-top: 1px solid #ddd;">
          <p style="margin: 0;">Please follow up with this lead promptly.</p>
          <p style="margin: 8px 0 0; font-style: italic; color: #555;">Thank you,<br/>VR2Tech Team</p>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
};

// POST route
app.post("/api/home/send-email", async (req, res) => {
  const ip = req.clientIp || "Unknown";
  const {
    name,
    email,
    mobile,
    message = "No message provided",
    webpage_url = "",
    page_title = "",
    submission_datetime = new Date().toLocaleString(),
  } = req.body;

  if (!name || !email || !mobile) {
    return res.status(400).json({ error: "Name, email, and mobile are required." });
  }

  const formData = {
    name,
    email,
    mobile,
    ip,
    message,
    webpage_url,
    page_title,
    submission_datetime,
  };

  try {
    await Promise.all([
      sendAutoReply(email, name),
      notifyAdmin(formData),
    ]);
    console.log("✅ Emails sent successfully");
    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    console.error("❌ Email sending error:", error);
    res.status(500).json({ error: "Failed to send emails", details: error.message });
  }
});

module.exports = serverless(app);
