const express = require('express');
const router = express.Router();

//----> userController
const { singUp } = require('../controllers/authController');

//---->Middlewares 
const { validator, userValidator } = require('../middlewares/auth');
router.post('/register',validator,  userValidator, singUp);
router.get('/', () => {return 'hello'});

module.exports = router;
