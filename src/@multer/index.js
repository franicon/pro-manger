const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../multer/uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
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
    // limits: {fileSize: 1024 * 1024},
    // fileFilter: fileFilter,
});

module.exports = upload
