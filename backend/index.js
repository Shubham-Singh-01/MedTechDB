const connectToMongo = require('./db');
const express = require('express');

const cors = require("cors");

const app = express(); // Define the 'app' object here
const port = 5000;

connectToMongo();

app.use(cors());
app.use(express.json());

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
