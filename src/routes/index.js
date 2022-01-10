const newsRoute = require('./news');
const meRoute = require('./me');
const courseRoute = require('./courses');
const siteRoute = require('./site');

function route(app) {
  app.use('/news', newsRoute);
  app.use('/me', meRoute);
  app.use('/courses', courseRoute);

  app.use('/', siteRoute);
}

module.exports = route;
