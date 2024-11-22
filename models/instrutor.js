const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instrutorSchema = new Schema({
    name: String, 
    email: {
        type: String,
        unique: true // `email` must be unique
      },
    materia: String, 
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Instrutor", instrutorSchema); 
