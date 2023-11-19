const { sendEmail } = require("../helper/emailHelper");
const {
  generateSixDigitCode,
  codeStore,
} = require("./../helper/CryptoSixCode");

const sendEmailController = async (req, res) => {
  const { userEmail } = req.body;
  console.log(userEmail);
  const code = generateSixDigitCode();
  codeStore(userEmail, code);
  console.log(codeStore(userEmail, code));

  try {
    await sendEmail(userEmail, code);
    res.status(200).json({ message: "E-mail envoyé avec succès!" });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

module.exports = sendEmailController;
