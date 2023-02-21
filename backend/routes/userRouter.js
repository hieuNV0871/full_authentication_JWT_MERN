const userController = require("../controllers/userController")
const router = require("express").Router()
const authMidleware = require("../middlewares/auth")
const authAdmin = require("../middlewares/authAdmin")


router.get("/info", authMidleware, userController.getUserInfo)
router.get("/all_user", authMidleware, authAdmin, userController.getAllUser)
router.patch("/update", authMidleware, userController.updateUser)
router.patch("/update_permission:/id", authMidleware, authAdmin, userController.updateUserPermission)
router.patch("/delete:/id", authMidleware, userController.deleteUser)




module.exports = router