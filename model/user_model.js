const mongoose = require('mongoose')
const Schema =mongoose.Schema({
    email:String,
    password:String
})
const User=mongoose.model('User',Schema);
module.exports= User