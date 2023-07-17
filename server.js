const express = require('express');
const data = require('./db.json');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/api/tasks', (req, res) => {
  res.json(data.tasks);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
