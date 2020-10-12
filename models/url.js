const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
  userID: { required: true, type: String },
  URLS: {}
});

module.exports = mongoose.model('url', URLSchema);
