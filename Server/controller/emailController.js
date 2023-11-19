const { sendEmail } = require("../helper/emailHelper");
const { generateSixDigitCode, codeStore } = require("../helper/codeHelper");
const { codeVerification, generateCode } = require("./../helper/codeHelper");
const speakeasy = require("speakeasy");

//secret stored
let StoredSecret;

//code sendCodeMail Controller
exports.sendEmailController = async (req, res) => {
  const { userEmail } = req.body;
  console.log("email de l' utilisateur: ", userEmail);

  //code importation
  const { code, secret } = generateCode();
  StoredSecret = secret;
  console.log("code généré: ", code);
  console.log("secret stocké : ", StoredSecret);

  try {
    const response = await sendEmail(userEmail, code);
    if (response) {
      res.status(200).json({ message: "E-mail envoyé avec succès!" });
    } else {
      res.status(500).json({ message: "E-mail non envoyé" });
    }
  } catch (error) {
    console.log(error);
  }
};

//code verification Controller
exports.codeVerificationController = async (req, res) => {
  try {
    const { userCode } = req.body;

    const verification = await codeVerification(userCode, StoredSecret);

    if (verification) {
      res.json({ message: "Le Code à 6 chiffres est correct" });
    } else {
      res.status(400).json({ message: "Code TOTP invalide" });
    }
  } catch (error) {
    console.log(error);
  }
};
