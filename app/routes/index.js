//render index template
module.exports = function(app) {
  app.route('/')
  .get(function(req, res) {
    res.status(200).render('index');
  });
};