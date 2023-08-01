const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

// validation

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'file/jpg' || file.mimetype === 'file/pdf') {
        cb(null, true)
    } else {
        cb({message: 'unsupported file format'}, false)
    }
}

const upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024},
    fileFilter: fileFilter,
});


module.exports = upload