
function FilmController() {
}

function get(req, res, next) {
  res.status(200).json({ hello: 'world' });
}

FilmController.prototype = {
  get: get
};

var filmsController = new FilmController();

module.exports = filmsController;
