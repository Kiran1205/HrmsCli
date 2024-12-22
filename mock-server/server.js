const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
];

const products = [
  { id: 101, name: 'Laptop', price: 1200 },
  { id: 102, name: 'Phone', price: 800 },
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(3000, () => {
  console.log('Mock server running at http://localhost:3000');
});
