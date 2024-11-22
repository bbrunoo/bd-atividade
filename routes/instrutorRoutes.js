const express = require("express");
const {
    getAllInstrutors,
    createInstrutor,
    getInstrutorById,
    updateInstrutor,
    deleteInstrutor
} = require("../controller/instrutorController");

const router = express.Router();

router.route("/").get(getAllInstrutors).post(createInstrutor);
router.route("/:id").get(getInstrutorById).put(updateInstrutor).delete(deleteInstrutor);

module.exports = router;
