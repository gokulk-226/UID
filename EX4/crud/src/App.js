import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


const App = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ studentId: '', name: '', gmail: '', phoneNum: '', age: '' });

  // Fetch students
  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  }, []);

  // Handle form changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add student
  const addStudent = () => {
    axios.post('http://localhost:5000/students', formData)
      .then(res => setStudents([...students, res.data]))
      .catch(err => console.log(err));
  };

  // Edit student
  const editStudent = (id) => {
    axios.put(`http://localhost:5000/students/${id}`, formData)
      .then(res => {
        setStudents(students.map(student => student._id === id ? res.data : student));
      })
      .catch(err => console.log(err));
  };

  // Delete student
  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5000/students/${id}`)
      .then(() => setStudents(students.filter(student => student._id !== id)))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Student CRUD Application</h1>
      <form>
        <input type="text" name="studentId" placeholder="Student ID" onChange={handleChange} />
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
        <input type="text" name="gmail" placeholder="Gmail" onChange={handleChange} />
        <input type="text" name="phoneNum" placeholder="Phone Number" onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} />
        <button type="button" onClick={addStudent}>Add Student</button>
      </form>

      <h2>Students List</h2>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            {student.name} - {student.gmail}
            <button onClick={() => editStudent(student._id)}>Edit</button>
            <button onClick={() => deleteStudent(student._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
