const Mongoose = require('mongoose');

let Schema = Mongoose.Schema;

let schema = new Schema({
    name : String,
    dateadd : Date,
    price : Number,
    stock : Number
})

module.exports = Mongoose.model('products', schema);