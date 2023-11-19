//verification du code
const codeVerification = (userCode, code) => {
  return new Promise((resolve, reject) => {
    if (userCode === code) {
      res.status(200).json({ message: "code valide" });
      resolve();
    } else {
      reject("code non valide");
      res.status(400).json({message: "code non valide"})
    }
  })
  .catch((err)=>{
      console.log(err)
      reject()
  })
};

module.exports = { codeVerification };
