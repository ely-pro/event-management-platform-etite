/** Node modules and other third party packages */
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 5050;

/** Middleware */
app.use(express.json())

/** Routes */
app.get("/", (req, res) => {
    res.send("Welcome to the Event Management Platform");
});

/** Starts the server */
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})