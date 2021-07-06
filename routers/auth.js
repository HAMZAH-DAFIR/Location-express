const express = require('express');
const router = express.Router();

//----> userController
const { singUp } = require('../controllers/authController');

router.post('/register', singUp);
router.get('/', () => {return 'hello'});

module.exports = router;
