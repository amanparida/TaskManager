# Task Manager Web Application

A modern and responsive task manager web app built using **HTML**, **CSS**, **JavaScript**, and **Node.js**. This app allows users to manage their tasks efficiently by adding, deleting, and viewing tasks with smooth animations. The backend saves the task data in a text file, ensuring simple and persistent storage. This project demonstrates practical use of front-end and back-end technologies, providing a seamless user experience with a professional design.

---

## Features

- **Task Management**: Add tasks with a name, description, and deadline.
- **Delete Tasks**: Remove tasks with smooth fade-out animations.
- **Responsive Layout**: Fully responsive design that adapts to mobile, tablet, and desktop screens.
- **Task Persistence**: Tasks are stored in a simple text file (`tasks.txt`), providing persistent storage without a database.
- **Engaging Animations**: Background animations and smooth UI transitions for a polished look and feel.
- **Clean and Modern UI**: Professional layout with clear, intuitive interactions.

---

## Technologies Used

- **Frontend**:
  - **HTML** for structure and content.
  - **CSS** (with custom animations and styles) for the design.
  - **JavaScript** for handling task operations (add, delete, fetch).
  - **Bootstrap** for a responsive layout and quick styling.

- **Backend**:
  - **Node.js** with **Express.js** for server-side logic.
  - **File System** module to manage task storage in a text file.

---

## Installation and Setup

### Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) comes with Node.js.

### Steps to Run Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager

2. Install dependencies:

Run the following command to install necessary packages:

bash
Copy
Edit
npm install


3. Start the application:

Run the server using the following command:

bash
Copy
Edit
npm start
This will start the server at http://localhost:3000.

4. Open in your browser:

Open your web browser and go to http://localhost:3000 to use the task manager.

Project Structure
public/: Contains the frontend files (index.html, style.css).

app.js: JavaScript file that handles frontend functionality (task operations).

server.js: Node.js server file responsible for handling HTTP requests (adding, fetching, and deleting tasks).

tasks.txt: A simple text file used to store tasks.

How It Works
Frontend Operations:

Users can add new tasks via a form by entering a name, description, and deadline.

Tasks are displayed in a list with a delete button next to each task.

When a task is deleted, a smooth fade-out animation is applied to the task item.

## Backend Operations:

Add Task: When a user submits a task, it is saved to the tasks.txt file on the server.

Delete Task: When a task is deleted, it is removed from the tasks.txt file, and the task list is updated.

Fetch Tasks: When the page loads, the tasks are read from the text file and displayed in the task list.

Key Features
Fully Responsive: The web app is designed to adapt to mobile, tablet, and desktop screen sizes.

Animations: Engaging animations for smooth transitions when tasks are added or deleted.

Data Persistence: Tasks are stored in a text file for simplicity, mimicking a database without the need for complex setups.

Task Deletion: Tasks can be deleted with a smooth fade-out animation, ensuring a polished user experience.