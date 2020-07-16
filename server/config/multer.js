let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuid/v4'),
    router = express.Router();

const DIR = './public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

// Event model- I THINK THIS NEEDS TO GO SOMEWHER ELSE... 
let Event = require('../models/Event');

router.post('/events', upload.single('imageUrl'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const event = new Event({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        profileImg: url + '/public/' + req.file.filename
    });
    event.save().then(result => {
        res.status(201).json({
            message: "Photo Uploaded!",
            userCreated: {
                _id: result._id,
                profileImg: result.profileImg
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})

module.exports = router;