const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
let User = require('../models/user.modal');

//this is the simple logic to upload image in the easiest way so every body can use this technique to upload image in simple way
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'images');
    },

    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
router.route('/users').get((req, res) => {
    User.find()
   
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));
  });

let upload = multer({ storage, fileFilter });
router.route('/add').post(upload.single('photo'), (req, res) => {
    const name = req.body.name;
    const birthdate = req.body.birthdate;
    const photo = req.file.filename;

    const newUserData = {
        name,
        birthdate,
        photo
    }

    const newUser = new User(newUserData);

    newUser.save()
           .then(() => res.json('User Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;