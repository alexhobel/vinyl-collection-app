const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const vinylCollectionPath = path.join(__dirname, 'vinylCollection.json');

let vinylCollection = [];

fs.readFile(vinylCollectionPath, (err, data) => {
  if (err) {
    console.error('Error reading vinyl collection file:', err);
    return;
  }
  vinylCollection = JSON.parse(data);
});

app.get('/vinyls', (req, res) => {
  res.json(vinylCollection);
});

app.get('/vinyls/:id', (req, res) => {
  const vinyl = vinylCollection.find(v => v.release_id === parseInt(req.params.id));
  if (vinyl) {
    res.json(vinyl);
  } else {
    res.status(404).send('Vinyl not found');
  }
});

const port = process.env.PORT || 3500;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

