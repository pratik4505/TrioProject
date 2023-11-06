const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const companySchema = new mongoose.Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true
      },
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  jobOpenings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'JobOpening' }],
  name: String,
  website: String,
  industry: String,
  about: String,
  employeeNo: Number,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  location: String,
  companyLogo: String, // Assuming the company logo is a URL to an image
  product: {
    title: String,
    description: String,
    price: Number,
    productImage: String // URL to the product image
  },
  service: {
    title: String,
    description: String,
    price: Number,
    serviceImage: String // URL to the service image
  }
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
