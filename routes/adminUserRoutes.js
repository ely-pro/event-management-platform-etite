const express = require("express");
const router = express.Router();
const authenticateJWT = require("../middlewares/authMiddleware")
const { getAdminById } = require("../controllers/adminControllers")

/** Protected route */
router.get("/:id", authenticateJWT, getAdminById )

module.exports = router