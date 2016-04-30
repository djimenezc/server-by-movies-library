
function FilmsController() {
}

function get(req, res, next) {
  res.status(200).json({ hello: 'world2' });
}

FilmsController.prototype = {
  get: get
};

var filmsController = new FilmsController();

module.exports = filmsController;
