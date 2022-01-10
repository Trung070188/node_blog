const Course = require('../models/Course');
const {
  mongooseToObject,
  mutipleMongooseToObject,
} = require('../../util/mongoose');
class MeController {
  //get/COURSE:SLUG

  stored(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render('me/stored-courses', {
          courses: mutipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
  trash(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render('me/trash-courses', {
          courses: mutipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
}

module.exports = new MeController();
