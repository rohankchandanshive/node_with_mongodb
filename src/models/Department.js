const mongoose = require('mongoose');

const schema = mongoose.Schema;

const Department = new schema({
    branch: String,
    users: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    }]
})

module.exports = mongoose.model("Department", Department);
