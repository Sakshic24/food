const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { createUser } = require("../controllers/user.controller");

//Better code writing practice
// router.route("/createuser").post(createUser);

//Sakshi Code
router.post("/createuser", async (req, res) => {
  try {
    const { name, password, email, location } = req.body;
    console.log(req.body);

    // await User.create({
    //   name: req.body.name,
    //   password: req.body.password,
    //   email: req.body.email,
    //   location: req.body.location,
    // });
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false });
    console.log(error);
  }
});
module.exports = router;
