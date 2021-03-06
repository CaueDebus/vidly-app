const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/cusotmers', customers);

app.get('/', (req, res) => {
    res.send('Welcome to vidly, my first movie rental app!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening to port ${port}...`));