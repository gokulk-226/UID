const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Define student schema
const studentSchema = new mongoose.Schema({
  studentId: String,
  name: String,
  gmail: String,
  phoneNum: String,
  age: Number,
});

const Student = mongoose.model('Student', studentSchema);

// CRUD Operations

// Create student
app.post('/students', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.send(student);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Read students
app.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Update student
app.put('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(student);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Delete student
app.delete('/students/:id', async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.send({ message: 'Student deleted' });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Start server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
