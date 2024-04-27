const { AdminUsers } = require("../models");

// const getAdminById = async (req, res) => {
//     try {
//         const adminUser = await AdminUsers.findByPk(req.params.id)
//         if(!adminUser) {
//             console.lo("Admin user not found.")
//             return res.status(401).json({ error: "Admin not found."})
//         }

//         res.status(200).json({ message: "This is the protected route.", adminInfo: adminUser})
//     } catch (error) {
//         console.log("Error getting admin by Id:", error)
//         res.status(400).json({ error: error.message})
//     }
// }
const getAdminById = async (req, res) => {
    try {
      const userId = 1;
      
      // Use the user ID to retrieve the admin user
      const adminUser = await AdminUsers.findByPk(userId); 
      if (!adminUser) {
        return res.status(404).json({ error: "Admin not found." });
      }
      res.status(200).json({ message: "This is the protected route.", adminInfo: adminUser });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  

module.exports = {
    getAdminById
}