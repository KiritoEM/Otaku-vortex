const crypto = require("crypto");

//function for six code generator
function generateSixDigitCode() {
  return Math.floor(100000 + Math.random() * 900000);
}

const codeStore = (userMail, code) => {
  let verificationCodes = {};
  verificationCodes[userMail] = code;
  let userCurrentcode = verificationCodes[userMail];

  console.log(`curent user[${userMail}]`, userCurrentcode);

  return userCurrentcode;
};

module.exports = { generateSixDigitCode, codeStore };
