const Personal = require("../models/Personal");
const Patient = require ("../models/Patient");
const Cita = require ("../models/Cita")
const { validationResult} = require("express-validator")

exports.newCita = async (req, res) =>{
  const mistakes = validationResult(req);
  if (!mistakes.isEmpty()) {
    return res.status(400).json({ mistakes: mistakes.array() });
  }

  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error")
  }
}

