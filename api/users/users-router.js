const router = require("express").Router();
const Users = require("./users-model.js");
const { bounded, adminValid } = require("../auth/auth-middleware.js");

router.get("/", bounded, (req, res, next) => {
  Users.bul()
    .then((users) => {
      res.json(users);
    })
    .catch(next);
});

router.get("/:user_id", bounded, adminValid("admin"), (req, res, next) => {
  Users.idyeGoreBul(req.params.user_id)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});

module.exports = router;
