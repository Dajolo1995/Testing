const Patient = require("../models/Patient");
const { validationResult } = require("express-validator");



exports.newPatient = async (req, res) => {
  const mistakes = validationResult(req);
  if (!mistakes.isEmpty()) {
    return res.status(400).json({ mistakes: mistakes.array() });
  }

  try {
    const patient = new Patient(req.body);
    patient.save();
    res.json(patient)

  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};

exports.obtainPatient = async (req,res,) =>{

  try {
    const patient = await Patient.find({})
    res.json({patient})
  } catch (error) {
    console.log(error);
    res.status(500).send('Hubo un error')
  }
} 

