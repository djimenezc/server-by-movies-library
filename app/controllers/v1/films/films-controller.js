
function FilmsController() {
}

function get(req, res, next) {

  var nPage = parseInt(req.query.page),
      n = parseInt(req.query.records),
      films = [];

      for(var id = 0;  id < n; id++) {

        films.push({
          'id': parseInt(id),
          'name': 'film ' + id,
          'description': 'description '+id,
          'year': 2001,
          'genre': 'terror'
        });
      }

  res.status(200).json(films);
}

FilmsController.prototype = {
  get: get
};

var filmsController = new FilmsController();

module.exports = filmsController;
