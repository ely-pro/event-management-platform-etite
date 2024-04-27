const bcrypt = require("bcrypt");
const { AdminUsers } = require("../models");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await AdminUsers.findOne({ where: { email }});
        if (existingUser) {
            return res.status(400).json({ error: "User already exists."})
        }

        const hashedPassword =  await bcrypt.hash(password, 10);
        const newUser = await AdminUsers.create({ username, email, password: hashedPassword})
        res.status(201).json(newUser)
    } catch (error) {
        console.error("Error registering the admin user:", error)
        res.status(400).json({ error: error.nessage })
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AdminUsers.findOne({ where: { email }})
        if(!user) {
            console.log("Invalid email or not found.")
            return res.status(401).json({ error: "Invalid email."})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid password"})
        }

        const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: "1h" })
        res.json({ token })

    } catch (error) {
        console.log("Internal server error")
        return res.status(400).json({ error: error.message})
    }
}

module.exports = {
    register,
    login
}