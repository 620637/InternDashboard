const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000; // Choose a different port than the React app

// Middleware
app.use(cors());
app.use(express.json());

// Dummy data for our intern
const internData = {
  name: 'XYZZZ',
  referralCode: 'xyzzz2025',
  donationsRaised: 1234.56,
  rewards: [
    { id: 1, name: 'Bronze Badge', unlocked: true },
    { id: 2, name: 'Silver Badge', unlocked: false },
    { id: 3, name: 'Golden Trophy', unlocked: false },
  ]
};

// Endpoint to get intern dashboard data
app.get('/api/intern-data', (req, res) => {
  res.json(internData);
});

// Simple welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the Intern Portal Backend!');
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});