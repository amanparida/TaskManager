const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));
app.use(express.json());

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Add a new task
app.post('/add-task', (req, res) => {
  const { taskName, taskDescription, taskDeadline } = req.body;
  const task = `Task: ${taskName}
Description: ${taskDescription}
Deadline: ${taskDeadline}

`;

  fs.appendFile('tasks.txt', task, (err) => {
    if (err) return res.status(500).send('Error saving task.');
    res.send('Task added successfully!');
  });
});

// Get all tasks
app.get('/tasks', (req, res) => {
  fs.readFile('tasks.txt', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading tasks.');
    res.send(data);
  });
});

// Delete a task by index
app.delete('/delete-task/:index', (req, res) => {
  const indexToDelete = parseInt(req.params.index);

  fs.readFile('tasks.txt', 'utf8', (err, data) => {
    if (err) return res.status(500).send('Error reading tasks.');

    // Split the tasks into an array by double newlines
    const tasks = data.trim().split('\n\n');

    // Check if the index is valid
    if (indexToDelete < 0 || indexToDelete >= tasks.length) {
      return res.status(400).send('Invalid task index.');
    }

    // Remove the task at the specified index
    tasks.splice(indexToDelete, 1);

    // Join the remaining tasks back into a string
    const updatedData = tasks.join('\n\n') + (tasks.length > 0 ? '\n\n' : '');

    // Write the updated tasks back to the file
    fs.writeFile('tasks.txt', updatedData, (err) => {
      if (err) return res.status(500).send('Error writing tasks.');
      res.send('Task deleted successfully.');
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
