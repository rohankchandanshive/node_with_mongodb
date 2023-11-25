const mongoose = require('mongoose');

const Users =  mongoose.Schema({
    name: String,
    industry: String,
    orders:[
        {
            productName: String,
            amountInCents: String
        }
    ]
})

module.exports = mongoose.model("Users", Users);