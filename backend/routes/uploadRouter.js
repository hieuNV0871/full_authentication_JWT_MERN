
const uploadController = require("../controllers/uploadController")
const router = require("express").Router()
const uploadImage = require("../middlewares/uploadImage")
const authMidleware = require("../middlewares/auth")

router.post("/upload_avatar", uploadImage, authMidleware, uploadController.uploadAvatar)




module.exports = router