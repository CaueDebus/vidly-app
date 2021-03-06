const mongoose = require('mongoose');
const Joi = require('joi');

const Genre = mongoose.model('Genre', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    }
}));

const validateGenre = (genre) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return result = Joi.validate(genre, schema);
};

exports.Genre = Genre;
exports.validate = validateGenre;