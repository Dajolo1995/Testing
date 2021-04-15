const User = require("../models/User");
const Patient = require ("../models/Patient");
const Quotes = require("../models/Quotes");
const { validationResult } = require("express-validator");

exports.newQuotes = async(req, res) =>{
    const mistakes = validationResult(req);
    if (!mistakes.isEmpty()) {
      return res.status(400).json({ mistakes: mistakes.array() });
    }

  
    try {
        const {patient} = req.body

        const patients = await Patient.findById(patient);
        if(!patients){
            return res.status(404).json({msg: 'Paciente no encontrado'})
        }

        const quotes = new Quotes({...req.body, personal:req.user.id});
        await quotes.save()
        res.json(quotes)
        

    } catch (error) {
        console.log(error);
        re.status(500).send('Hubo un error')
    }
}

exports.obtainQuotes = async (req,res,) =>{

    try {
      const patient = await Quotes.find({}).populate('patient')
      res.json({patient})
    } catch (error) {
      console.log(error);
      res.status(500).send('Hubo un error')
    }
  } 
  
  