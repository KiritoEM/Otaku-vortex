var speakeasy = require("speakeasy");

//function for six code generator
function generateCode() {
  //generate secret key
  const secret = speakeasy.generateSecret({ length: 20 }).base32;
  // Generate code TOTP
  const code = speakeasy.totp({
    secret: secret,
    encoding: "base32",
    digits: 6,
  });

  console.log("secret: ", secret);

  return { code, secret };
}

//code verification
const codeVerification = async (userCode, secret) => {
  try {
    return speakeasy.totp.verify({
      secret: secret,
      encoding: "base32",
      token: userCode,
      window: 12, //5 minutes
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "erreur lors de la verification du code secret" });

    throw new Error("Erreur lors de la vérification du code secret");
  }
};

module.exports = { generateCode, codeVerification };
