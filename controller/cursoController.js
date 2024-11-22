const cursoService = require("../services/cursoService");

exports.getAllCursos = async (req, res) => {
    try {
        const cursos = await cursoService.getAllCursos();
        res.json({ data: cursos, status: "success" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.createCurso = async (req, res) => {
    try {
        const curso = await cursoService.createCurso(req.body);
        res.json({ data: curso, status: "success" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getCursoById = async (req, res) => {
    try {
        const curso = await cursoService.getCursoById(req.params.id);
        res.json({ data: curso, status: "success" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.updateCurso = async (req, res) => {
    try {
        const curso = await cursoService.updateCurso(req.params.id, req.body);
        res.json({ data: curso, status: "success" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.deleteCurso = async (req, res) => {
    try {
        const curso = await cursoService.deleteCurso(req.params.id);
        res.json({ data: curso, status: "success" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}
