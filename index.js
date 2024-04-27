/** Node modules and other third party packages */
require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database")

const app = express();
const PORT = 5050;

 
/** Middleware */
app.use(express.json()) 

/** Routes */
app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/admin", require("./routes/adminUserRoutes"))

/** Starts the server */
app.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}.`)

    /** Sync the database */
    try {
        await sequelize.authenticate();
        console.log("Database connection has been established successfully.")
        await sequelize.sync({ alter: true })
        console.log("Database synchronized")
    } catch (error) {
        console.error("Unable to connect to the database:", error)
    }
})