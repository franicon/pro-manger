const {v2: cloudinary} = require("cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRER_KEY,
    secure: true,
});

async function attach(file) {
    await cloudinary.uploader.upload(file, {folder: 'pro-manager'}).then(r => r ).catch(err => console.log(err));

}

module.exports = attach
