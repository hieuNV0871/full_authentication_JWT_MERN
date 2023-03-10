const cloudinary = require("cloudinary").v2
const fs = require("fs")
const dotenv = require("dotenv")
dotenv.config()


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

const uploadController = {
    uploadAvatar: async (req, res) => {
        try {
            const file = req.files.file
            cloudinary.uploader.upload(file.tempFilePath, {
                folder: 'avatar', width:150, height: 150, crop: "fill"
            }, async(err, result)=>{
                if(err) throw err
                removeTmp(file.tempFilePath)

                res.json({url: result.secure_url})
            })
        } catch (error) {
            res.status(500).json({msg: error.message})
        }
    }
}
const removeTmp = path => {
    fs.unlink(path, err => {
        if(err){
            throw err
        }
    })
}

module.exports = uploadController