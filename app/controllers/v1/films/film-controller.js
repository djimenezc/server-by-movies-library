'use Strict';

function FilmController() {
}

function get(req, res, next) {

    var id = req.params.id,
        film = {
            'id': parseInt(id),
            'name': 'film ' + id,
            'description': 'description 1',
            'year': 2001,
            'genre': 'terror'
        };

    console.log('returning film: ' + id);

    res.status(200).json(film);
}

FilmController.prototype = {
    get: get
};

var filmsController = new FilmController();

module.exports = filmsController;
