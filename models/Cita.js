const mongoose = require ('mongoose');

const CitaSchema = mongoose.Schema({

    cita:{
        type:String,
        required: true,
        trim:true
    },
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    
    employees:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Personal'
    },
    date:{
        type: Date
    },
    record:{
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('Cita', CitaSchema )