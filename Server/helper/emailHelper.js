const nodemailer = require("nodemailer");

// Création du transporteur
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Fonction pour l'envoi du mail
const sendEmail = (senderMail, userText) => {
  const mailOptions = {
    from: `${senderMail}`,
    to: "loickemadesemadisson@gmail.com",
    subject: "Otaku-vortex",
    text: `${userText}`,
  };

  console.log(mailOptions);

  //fonction de retour pour le mailer
  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
