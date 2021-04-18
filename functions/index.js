const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({origin: true});

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.submitForm = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return;
    }

    const mailOptions = {
      from: req.body.name,
      replyTo: req.body.email,
      to: gmailEmail,
      subject: `from my portfolio website ${req.body.email}`,
      text: req.body.message,
      html: `<p>${req.body.message}</p>`,
    };

    mailTransport.sendMail(mailOptions);

    res.status(200).send({isEmailSend: true});
  });
});
