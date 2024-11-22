const cursoModel = require("../models/curso");

exports.getAllCursos = async () => {
    return await cursoModel.find().populate('instrutorId');  
}

exports.createCurso = async (curso) => {
    return await cursoModel.create(curso);
}

exports.getCursoById = async (id) => {
    return await cursoModel.findById(id).populate('instrutorId');  
}

exports.updateCurso = async (id, curso) => {
    return await cursoModel.findByIdAndUpdate(id, curso);
}

exports.deleteCurso = async (id) => {
    return await cursoModel.findByIdAndDelete(id);
}
