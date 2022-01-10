const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
const { all } = require('../../routes/courses');
class CourseController {
  //get/COURSE:SLUG

  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) =>
        res.render('courses/show', { course: mongooseToObject(course) }),
      )
      .catch(next);
  }
  create(req, res, next) {
    res.render('courses/create');
  }

  store(req, res, next) {
    const fromData = req.body;
    fromData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(fromData);
    course
      .save()
      .then(() => res.redirect('/me/stored/courses'))
      .catch((error) => {});

    // res.json(req.body);
  }
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render('courses/edit', {
          course: mongooseToObject(course),
        }),
      )
      .catch(next);
  }
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }
  destroy(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
  //xoa vinhv vien
  force(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case 'delete':
        Course.delete({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect('back'))
          .catch(next);
        break;
      default:
        res.json({ message: ' không hợp lê' });
    }
  }
  khoiphuc(req, res, next) {
    switch (req.body.action) {
      case 'khoiphuc':
        Course.restore({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect('back'))
          .catch(next);
        break;
      case 'xoavinhvien':
        Course.deleteMany({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect('back'))
          .catch(next);
        break;
      default:
        res.json({ message: 'khong hop le' });
    }
  }
}
module.exports = new CourseController();
