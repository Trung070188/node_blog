class NewsController {
  index(req, res) {
    res.render('news');
  }
  show(req, res) {
    // res.send('quang trung');
  }
}
module.exports = new NewsController();
