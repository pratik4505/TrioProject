const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jobOpeningSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true
  },
  location: String,
  industry: String,
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company', // Reference to the Company model
    required: true
  },
  skillsRequired: [String], // Array of skills required
  description: String
});

const JobOpening = mongoose.model('JobOpening', jobOpeningSchema);

module.exports = JobOpening;
