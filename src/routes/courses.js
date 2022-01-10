var express = require('express');

var router = express.Router();

const CourseController = require('../app/controllers/CourseController');
// newsController.index;
router.get('/create', CourseController.create);
router.get('/:id/edit', CourseController.edit);
router.post('/handle-form-actions', CourseController.handleFormActions);
router.post('/khoiphuc', CourseController.khoiphuc);
router.put('/:id', CourseController.update);
router.patch('/:id/restore', CourseController.restore);

router.delete('/:id', CourseController.destroy);
router.delete('/:id/force', CourseController.force);
router.post('/store', CourseController.store);
router.get('/:slug', CourseController.show);

module.exports = router;
