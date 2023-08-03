const fs = require("fs");
// const path = require("path");

const attach = require('../@cloud/index');
const upload = require('../@multer/index');

const file  = async (req, res, next) => {
    return upload.single('image')(req, res, () => {
        // Remember, the middleware will call it's next function
        // so we can inject our controller manually as the next()

        if (!req.file) return res.json({ error: 'Something went-wrong' })
        next()
    })    // const uploader = async (path) => await attach(path);

    // const urls = [];
    //
    // const files = req.files
    // for (const file of files) {
    //     const {path} = file
    //
    //     const newPath = await uploader(path);
    //
    //     urls.push(newPath);
    //
    //     fs.unlinkSync(path);
    // }

    // try {
    //     console.log(files)
    //     res.status(200).json({
    //         message: 'Project created successfully',
    //         data: files
    //     });
    // } catch (err) {
    //     res.status(400).json({error: err});
    // }

    // next()
}

module.exports = file
