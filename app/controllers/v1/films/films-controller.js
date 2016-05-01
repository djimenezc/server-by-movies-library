
function FilmsController() {
}

function get(req, res, next) {

  var nPage = parseInt(req.query.page),
      pageSize = parseInt(req.query.records),
      films = [];

      for(var id = nPage * pageSize;  id < (nPage * pageSize) + pageSize; id++) {

        films.push({
          'id': parseInt(id),
          'name': 'film ' + id,
          'description': 'description '+id,
          'year': 2001,
          'genre': 'terror'
        });
      }

  console.log('returning films to id: ' + id);

  res.status(200).json(films);
}

FilmsController.prototype = {
  get: get
};

var filmsController = new FilmsController();

module.exports = filmsController;
