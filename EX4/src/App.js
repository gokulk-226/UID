import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ studentId: '', name: '', gmail: '', phoneNum: '', age: '' });
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

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
    if (isEdit) {
      editStudent(editId);
    } else {
      axios.post('http://localhost:5000/students', formData)
        .then(res => {
          setStudents([...students, res.data]);
          resetForm();
        })
        .catch(err => console.log(err));
    }
  };

  // Edit student
  const editStudent = (id) => {
    axios.put(`http://localhost:5000/students/${id}`, formData)
      .then(res => {
        setStudents(students.map(student => student._id === id ? res.data : student));
        resetForm();
      })
      .catch(err => console.log(err));
  };

  // Prepare form for editing
  const handleEditClick = (student) => {
    setFormData({ ...student });
    setIsEdit(true);
    setEditId(student._id);
  };

  // Delete student
  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5000/students/${id}`)
      .then(() => setStudents(students.filter(student => student._id !== id)))
      .catch(err => console.log(err));
  };

  // Reset form
  const resetForm = () => {
    setFormData({ studentId: '', name: '', gmail: '', phoneNum: '', age: '' });
    setIsEdit(false);
    setEditId(null);
  };

  return (
    <div className="app-container">
      <h1>Student CRUD Application</h1>
      <form className="student-form">
        <input type="text" name="studentId" placeholder="Student ID" value={formData.studentId} onChange={handleChange} />
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="gmail" placeholder="Gmail" value={formData.gmail} onChange={handleChange} />
        <input type="text" name="phoneNum" placeholder="Phone Number" value={formData.phoneNum} onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
        <button type="button" onClick={addStudent}>{isEdit ? 'Update Student' : 'Add Student'}</button>
      </form>

      <h2>Students List</h2>
      <table className="student-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Gmail</th>
            <th>Phone Number</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
              <td>{student.studentId}</td>
              <td>{student.name}</td>
              <td>{student.gmail}</td>
              <td>{student.phoneNum}</td>
              <td>{student.age}</td>
              <td>
                <button onClick={() => handleEditClick(student)}>Edit</button>
                <button onClick={() => deleteStudent(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
