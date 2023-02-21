
const authController = require("../controllers/authController")
const router = require("express").Router()
const authMidleware = require("../middlewares/auth")

router.post("/signup", authController.signup)
router.post("/activation", authController.activeEmail)
router.post("/signin", authController.signin)
router.post("/refresh_token", authController.getAccessToken)
router.post("/forgot_password", authController.forgotPassword)
router.post("/reset_password", authMidleware, authController.resetPassword)
router.post("/signout", authController.signout)
router.post("/google_login", authController.googleLogin)


module.exports = router