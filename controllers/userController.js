const User = require("../models/User");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.newUser = async (req, res) => {
  const mistakes = validationResult(req);
  if (!mistakes.isEmpty()) {
    return res.status(400).json({ mistakes: mistakes.array() });
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(409).json({ msg: "El usuario ya existe" });
    }

    user = new User(req.body);

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    user.save((error, datos) => {
      if (error) {
        res.status(422).send("Falta la trajeta profesional");
      }
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        process.env.SECRETA,
        {
          expiresIn: 3600, //1 Hour
        },
        (error, token) => {
          if (error) throw error;
          res.json({ token });
        }
      );
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};
