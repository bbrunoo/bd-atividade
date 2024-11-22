const express = require("express");
const {
    getAllCursos,
    createCurso,
    getCursoById,
    updateCurso,
    deleteCurso
} = require("../controller/cursoController"); 

const router = express.Router();

router.route("/").get(getAllCursos).post(createCurso);
router.route("/:id").get(getCursoById).put(updateCurso).delete(deleteCurso);

module.exports = router;
