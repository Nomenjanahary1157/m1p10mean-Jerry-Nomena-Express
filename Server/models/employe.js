const mongoose = require('mongoose');

const employerSchema = new mongoose.Schema({
  idEmployer: {
    type: Number,
    required: true,
    unique: true
  },
  nomEmployer: {
    type: String,
    required: true
  },
  prenomEmployer: {
    type: String,
    required: true
  },
  salaire: {
    type: Number,
    required: true
  },
  dateEmbauche: {
    type: Date,
    required: true
  },
  dateRenvoie: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Employer', employerSchema);
