const express = require("express");
const bodyParser = require("body-parser");
const { exec } = require("child_process");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.post("/execute", (req, res) => {
    const code = req.body.code;
    exec(`python -c "${code}"`, (error, stdout, stderr) => {
        if (error) {
            res.status(500).send(stderr);
        } else {
            res.send(stdout);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});