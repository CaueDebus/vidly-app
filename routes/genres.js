const Joi = require('joi');
const express = require('express');
const router = express.Router();

const genres = [
    { genreId: 1, name: 'Action' },
    { genreId: 2, name: 'Horror' },
    { genreId: 3, name: 'Comedy' },
    { genreId: 4, name: 'Sci-fi' },
];

router.get('/', (req, res) => {
    res.send(genres);
});

router.post('/', (req, res) => {
    const { error } = validateGenre(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const genre = {
        genreId: genres.length + 1,
        name: req.body.name
    }

    genres.push(genre);
    res.send(genre);
});

router.put('/:genreId', (req, res) => {
    const genre = genres.find(c => c.genreId === parseInt(req.params.genreId));
    if (!genre) {
        return res.status(404).send('The genre with the given ID was not found.');
    }

    const { error } = validateGenre(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    genre.name = req.body.name;
    res.send(genre);
});

router.delete('/:genreId', (req, res) => {
    const genre = genres.find(c => c.genreId === parseInt(req.params.genreId));
    if (!genre) {
        return res.status(404).send('The genre with the given ID was not found.');
    }

    const index =  genres.indexOf(genre);
    genres.splice(index, 1);

    res.send(genre);
});

router.get('/:genreId', (req, res) => {
    const genre = genres.find(c => c.genreId === parseInt(req.params.genreId));
    if (!genre) {
        return res.status(404).send('The genre with the given ID was not found.');
    }
    res.send(genre);
});

const validateGenre = (genre) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return result = Joi.validate(genre, schema);
};

module.exports = router;