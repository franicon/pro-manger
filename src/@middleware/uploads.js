const fs = require("fs");
// const path = require("path");

const attach = require('../@cloud/index');
const upload = require('../@multer/index');

const file  = async (req, res, next) => {
    return upload.array('image')(req, res, async () => {
        const uploader = async (path) => await attach(path);
        const urls = [];

        const files = req.files
        for (const file of files) {
            const {path} = file

            const newPath = await uploader(path);

            urls.push(newPath);

            fs.unlinkSync(path);
        }
        console.log(req.files, 'files')
        if (!req.files) return res.json({error: 'Something went-wrong'})
        next()
    });
}

module.exports = file
