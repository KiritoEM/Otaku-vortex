const { sendEmail } = require("../helper/emailHelper");

const sendEmailController = async (req, res) => {
  const { senderEmail, userText } = req.body;

  try {
    await sendEmail(senderEmail, userText);
    res.status(200).json({ message: "E-mail envoyé avec succès!" });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

module.exports = sendEmailController;
