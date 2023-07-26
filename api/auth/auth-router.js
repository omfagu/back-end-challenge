const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { usernameVarmi, rolAdiGecerlimi } = require("./auth-middleware");
const { JWT_SECRET, HASH_ROUND } = require("../secrets"); // bu secret'ı kullanın!
const User = require("../users/users-model");

router.post("/register", rolAdiGecerlimi, async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = bcrypt.hashSync(password, HASH_ROUND);
    const user = await User.ekle({
      username: username,
      password: hashedPassword,
      role_name: req.role_name,
    });
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

router.post("/login", usernameVarmi, async (req, res, next) => {
  const { username, password } = req.body;
  const [user] = await User.goreBul({ username: username });
  if (user && bcrypt.compareSync(password, user.password)) {
    const payload = {
      subject: user.user_id,
      username: user.username,
      role_name: user.role_name,
    };
    const options = {
      expiresIn: "24h",
    };

    const token = jwt.sign(payload, JWT_SECRET, options);
    res.json({ message: `Hos Geldin! ${user.username} `, token: token });
  } else {
    next({ status: 401, message: "Lutfen Uye Olunuz" });
  }
});

module.exports = router;
