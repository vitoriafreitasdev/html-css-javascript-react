const multer = require("multer")

// ajuda a criar o nome do arquivo
const path = require("path")

// para fazer o armazenamento da imagem no disco
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, "../public/images/"))
    },
    filename: function(req, file, cb) {
        //  Date.now() => para diminuir a substituição de nome
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true)
    }  else{
        cb(null, false)
    }
}

const upload = multer({
    storage,
    fileFilter
})

module.exports = upload;