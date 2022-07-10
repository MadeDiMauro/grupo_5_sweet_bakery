const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/avatars'));
    },
    filename: (req, file, cb) => {
        const avatarSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + avatarSuffix + path.extname(file.originalname));
    }
});

const uploadAvatar = multer({ storage });

module.exports = uploadAvatar;