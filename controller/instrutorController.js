const instrutorService = require("../services/instrutorService");

exports.getAllInstrutors = async (req, res) => {
    try {
        const instrutors = await instrutorService.getAllInstrutors();
        res.json({ data: instrutors, status: "success" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.createInstrutor = async (req, res) => {
    try {
        const instrutor = await instrutorService.createInstrutor(req.body);
        res.json({ data: instrutor, status: "success" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getInstrutorById = async (req, res) => {
    try {
        const instrutor = await instrutorService.getInstrutorById(req.params.id);
        res.json({ data: instrutor, status: "success" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.updateInstrutor = async (req, res) => {
    try {
        const instrutor = await instrutorService.updateInstrutor(req.params.id, req.body);
        res.json({ data: instrutor, status: "success" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.deleteInstrutor = async (req, res) => {
    try {
        const instrutor = await instrutorService.deleteInstrutor(req.params.id);
        res.json({ data: instrutor, status: "success" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}
