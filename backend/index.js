//index.js backend
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
app.use('/api/authdoctor', require('./routes/authDoctor'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/notesdoctor', require('./routes/notesDoctor'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
