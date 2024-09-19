const express = require('express');
const { registerUser, loginUser } = require('../controller/userController');
const upload = require('../middleware/uploadMiddleware');
const router = express.Router();

router.post('/register', upload.single('profilePicture'), registerUser);
router.post('/login', loginUser);

module.exports = router;
