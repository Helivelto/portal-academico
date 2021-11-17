const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController')


/* GET users listing. */
router.get('/', UserController.readAll)


module.exports = router;
