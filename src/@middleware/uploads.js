const path = require("path");


const attach = require('../@cloud/index');
const upload = require('../@multer/index');

const file  = (req, res, next) => {
    const uploader = async (path)  => console.log(path);

    const urls = []
    const files  = req.files

    // for (const file of files) {
    //     const {path} = file
    //     urls.push(path)
    // }

    res.status(200).json({
        message: 'Uploaded successfully',
        data: urls
    });

    next()
}

module.exports = file
