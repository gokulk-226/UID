import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      const currentDateTime = new Date();
      const date = currentDateTime.toLocaleDateString(); // Format: MM/DD/YYYY
      const time = currentDateTime.toLocaleTimeString(); // Format: HH:MM:SS AM/PM
      setTodos([...todos, { task, completed: false, date, time }]);
      setTask(''); // Clear input field after adding task
    }
  };

  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTask = (index) => {
    const newTodos = todos.filter((_, idx) => idx !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <div>
              <span onClick={() => handleToggleComplete(index)}>{todo.task}</span>
              <div className="datetime">
                <small>Added on: {todo.date} at {todo.time}</small>
              </div>
            </div>
            <button className="delete-btn" onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
