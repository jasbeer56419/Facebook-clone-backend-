const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Facebook Clone Backend is running.');
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'test@fb.com' && password === '123456') {
    res.status(200).json({ token: 'fake-jwt-token' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;
  res.status(201).json({ message: 'User created', user: { name, email } });
});

app.listen(5000, () => console.log('Server running on port 5000'));