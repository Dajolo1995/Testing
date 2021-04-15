const mongoose = require ('mongoose');

const PatientSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    identification:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    direction:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
    },
    phone:{
        type: String,
        required: true,
        trim: true,
    },
    record:{
        type: Date,
        default: Date.now()
    }
    
})

module.exports = mongoose.model("Patient", PatientSchema);

