const Mongoose = require('mongoose');
const float = require('mongoose-float')

let Schema = Mongoose.Schema;

let schema = new Schema({
    name : String,
    dateadd : Date,
    price : float.float,
    stock : Number
})

module.exports = Mongoose.model('products', schema);