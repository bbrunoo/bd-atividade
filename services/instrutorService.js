const instrutorModel = require("../models/instrutor");

exports.getAllInstrutors = async () => {
    return await instrutorModel.find();
}

exports.createInstrutor = async (instrutor) => {
    return await instrutorModel.create(instrutor);
}

exports.getInstrutorById = async (id) => {
    return await instrutorModel.findById(id);
}

exports.updateInstrutor = async (id, instrutor) => {
    return await instrutorModel.findByIdAndUpdate(id, instrutor);
}

exports.deleteInstrutor = async (id) => {
    return await instrutorModel.findByIdAndDelete(id);
}
