const express = require("express");
const mongoose = require("mongoose");
const instrutorRouter = require("./routes/instrutorRoutes");
const cursoRouter = require("./routes/cursoRoutes");

const PORT = 9090;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/instrutor", instrutorRouter);
app.use("/curso", cursoRouter);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/DBEscola",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
