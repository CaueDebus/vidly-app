const genres = require('./routes/genres');
const express = require('express');
const app = express();
app.use(express.json());

app.use('/api/genres', genres);

app.get('/', (req, res) => {
    res.send('Welcome to vidly, my first movie rental app!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening to port ${port}...`));