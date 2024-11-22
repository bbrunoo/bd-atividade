const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cursoSchema = new Schema({
    nome: String,
    descricao: String,
    duracao: String,
    instrutorId: { type: Schema.ObjectId, ref: "Instrutor" }, 
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Curso", cursoSchema);