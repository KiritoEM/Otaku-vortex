const nodemailer = require("nodemailer");

// Création du transporteur
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Fonction pour l'envoi du mail
const sendEmail = (userMail, code) => {
  const mailOptions = {
    from: process.env.EMAIL_SENDER,
    to: `${userMail}`,
    subject: "Otaku Vortex - vérification de code",
    text: `Votre code de vérification : ${code}`,
  };

  //fonction de retour pour le mailer
  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
