const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../secrets"); // bu secreti kullanın!
const User = require("../users/users-model");

const sinirli = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json({ message: "Token gerekli" });
  } else {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Token gecersiz" });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  }
};

const sadece = (role_name) => (req, res, next) => {
  const role = req.decodedToken.role_name;
  if (role === role_name) {
    next();
  } else {
    res.status(403).json({ message: "Bu, senin için değil" });
  }
};

const usernameVarmi = async (req, res, next) => {
  const { username } = req.body;
  const [user] = await User.goreBul({ username: username });
  if (!user) {
    res.status(401).json({ message: "Geçersiz kriter" });
  } else {
    next();
  }
};

const rolAdiGecerlimi = (req, res, next) => {
  let role_name = req.body.role_name;
  if (!role_name || role_name.trim() === "") {
    role_name = "user";
  }
  role_name = role_name.trim();

  if (role_name === "admin") {
    res.status(422).json({ message: "Rol adı admin olamaz" });
  } else if (role_name.length > 32) {
    res.status(422).json({ message: "rol adı 32 karakterden fazla olamaz" });
  } else {
    req.role_name = role_name;
    next();
  }
};

module.exports = {
  sinirli,
  usernameVarmi,
  rolAdiGecerlimi,
  sadece,
};
