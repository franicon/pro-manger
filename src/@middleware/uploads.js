// const path = require("path");

const attach = require('../@cloud/index');
const upload = require('../@multer/index');
const fs = require("fs");

const file  = async (req, res, next) => {
    await upload.array('file')
    const uploader = async (path) => await attach(path);

    const urls = [];

    const files = await req.files

    // for (const file of files) {
    //     const {path} = file
    //
    //     const newPath = await uploader(path);
    //
    //     urls.push(newPath);
    //
    //     fs.unlinkSync(path);
    // }
    console.log(files);

    try {
        res.status(200).json({
            message: 'Project created successfully',
            data: files
        });
    } catch (err) {
        res.status(400).json({error: err})
    }

    next()
}

module.exports = file
