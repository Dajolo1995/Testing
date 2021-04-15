const mongoose = require ('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  identification: {
    type: String,
    required: true,
    trim: true,
  },
  cargo:{
    type: String,
    enum:['enfermera', 'Medico Especialista', 'Medico General'],
    trim: true,
    required: true
  },
  tp: {
    type: String,
    trim: true,
    required:function() {  
      console.log(this.cargo)
      return this.cargo !=='enfermera'
      
    },
    unique:true
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique:true
  },

  password: {
    type: String,
    required: true,
    trim: true,
  },

  record: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", UserSchema);