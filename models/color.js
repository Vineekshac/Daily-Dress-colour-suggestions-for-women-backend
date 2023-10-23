const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
    name:{
      type:String,
      required:true
    }
  })
  

module.exports = new mongoose.model('Color',colorSchema);