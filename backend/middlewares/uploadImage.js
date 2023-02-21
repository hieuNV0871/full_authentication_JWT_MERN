const fs = require("fs")

module.exports = async (req, res, next) => {
    try {
        if(!req.files || Object.keys(req.files).length === 0){
            return res.status(400).json({msg: "Không có tập tin được tải lên"})
        }
        const file = req.files.file
        if(file.size > 1024 * 1024){
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg: "Kích thước tập tin quá lớn"})

        }
        if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg'){
            removeTmp(file.tempFilePath)
            return res.status(400).json({msg: "Hãy chọn ảnh có định dang jpeg hoặc png"})
        }
        next()
        
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const removeTmp = path => {
    fs.unlink(path, err => {
        if(err){
            throw err
        }
    })
}