const Personal = require("../models/Personal");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.newPersonal = async (req, res) => {
  const mistakes = validationResult(req);
  if (!mistakes.isEmpty()) {
    return res.status(400).json({ mistakes: mistakes.array() });
  }

  const { email, password } = req.body;

  try {
    let personal = await Personal.findOne({ email });

    if (personal) {
      return res.status(409).json({ msg: "El usuario ya existe" });
    }

    personal = new Personal(req.body);

    const salt = await bcrypt.genSalt(10);
    personal.password = await bcrypt.hash(password, salt);

    personal.save((error, datos) => {
      if (error) {
        res.status(422).send("Falta la trajeta profesional");
      }
      const payload = {
        personal: {
          id: personal.id,
          
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
