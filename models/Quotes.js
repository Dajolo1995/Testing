const mongoose = require ('mongoose');

const QuotesSchema = mongoose.Schema({

    cita:{
        type:String,
        required: true,
        trim:true
    },
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    personal:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    record:{
        type: Date,
        default: Date.now()  
    }

})

module.exports = mongoose.model('Quotes', QuotesSchema )