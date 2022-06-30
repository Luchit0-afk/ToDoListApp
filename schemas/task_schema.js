var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var task = new Schema({
    name: {
        type: String,
        default: "",
    },
    description: {
        type: String,
        default: "",
    },
    // Tal vez estaria bueno tener una fecha por defecto
    date: {
        type: Date,
        default: null,
    },
});   

module.exports = mongoose.model('Task', task);