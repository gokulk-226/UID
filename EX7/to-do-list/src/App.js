import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const handleAddTask = () => {
    if (task.trim()) {
      if (isEditing) {
        const updatedTodos = [...todos];
        updatedTodos[currentTaskIndex].task = task;
        setTodos(updatedTodos);
        setIsEditing(false);
        setCurrentTaskIndex(null);
      } else {
        setTodos([...todos, { task, completed: false }]);
      }
      setTask(''); // Clear input field after adding/updating task
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

  const handleUpdateTask = (index) => {
    setTask(todos[index].task);
    setIsEditing(true);
    setCurrentTaskIndex(index);
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
        <button onClick={handleAddTask}>
          {isEditing ? 'Update Task' : 'Add Task'}
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <div>
              <span onClick={() => handleToggleComplete(index)}>{todo.task}</span>
            </div>
            <button className="update-btn" onClick={() => handleUpdateTask(index)}>
              Update
            </button>
            <button className="delete-btn" onClick={() => handleDeleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
