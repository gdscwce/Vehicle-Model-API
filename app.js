const express = require('express');
const fs = require('fs'); // Add this line to use the 'fs' module
const app = express();
const port = 3000;

// Read data from 'data.json'
const rawData = fs.readFileSync('data.json');
const carData = JSON.parse(rawData);

// Define routes...

app.get('/cars', (req, res) => {
  res.json(carData);
});

app.get('/cars/:id', (req, res) => {
  const carId = parseInt(req.params.id);
  const car = carData.find((car) => car.id === carId);

  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ error: 'Car not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
