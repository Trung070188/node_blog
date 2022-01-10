var express = require('express');

var router = express.Router();

const MeController = require('../app/controllers/MeController');
// newsController.index;
router.get('/stored/courses', MeController.stored);
router.get('/trash/courses', MeController.trash);

module.exports = router;
