const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Session = new Schema({
    name:{
        type: String,
    },
    term:{
        type: String,
    },
    format:{
        type: String,
    },
    length:{
        type: String,
    }
});

module.exports = mongoose.model('Session', Session)//exported to server.js