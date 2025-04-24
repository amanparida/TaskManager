async function loadTasks() {
  try {
    const res = await fetch('/tasks');
    const data = await res.text();
    const tasks = data.split('\n\n');
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
      if (task.trim()) {
        const taskElement = document.createElement('li');
        taskElement.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        taskElement.setAttribute('data-index', index);

        const taskText = document.createElement('span');
        taskText.innerText = task;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-sm btn-danger delete-btn';
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => deleteTask(index, taskElement); // Pass element for animation

        taskElement.appendChild(taskText);
        taskElement.appendChild(deleteButton);
        taskList.appendChild(taskElement);
      }
    });
  } catch (error) {
    console.error('Error loading tasks:', error);
  }
}

async function deleteTask(index, taskElement) {
  try {
    const res = await fetch(`/delete-task/${index}`, {
      method: 'DELETE'
    });
    if (res.ok) {
      taskElement.classList.add('fade-out'); // Add fade-out class for animation
      setTimeout(() => {
        taskElement.remove(); // Remove task after animation
      }, 500); // Wait for the fade-out animation to finish
      alert('Task deleted successfully!');
    } else {
      alert('Failed to delete task');
    }
  } catch (error) {
    console.error('Error deleting task:', error);
  }
}

async function handleFormSubmit(event) {
  event.preventDefault();
  const taskName = document.getElementById('taskName');
  const taskDescription = document.getElementById('taskDescription');
  const taskDeadline = document.getElementById('taskDeadline');

  const taskData = {
    taskName: taskName.value,
    taskDescription: taskDescription.value,
    taskDeadline: taskDeadline.value
  };

  try {
    const res = await fetch('/add-task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData)
    });

    if (res.ok) {
      alert('Task added successfully!');
      taskName.value = '';
      taskDescription.value = '';
      taskDeadline.value = '';
      loadTasks();  // Reload tasks after adding new task
    } else {
      alert('Failed to add task');
    }
  } catch (error) {
    console.error('Error adding task:', error);
  }
}

document.getElementById('taskForm').addEventListener('submit', handleFormSubmit);
window.onload = loadTasks;
