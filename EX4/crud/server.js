const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

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
  const student = new Student(req.body);
  await student.save();
  res.send(student);
});

// Read students
app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

// Update student
app.put('/students/:id', async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(student);
});

// Delete student
app.delete('/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send({ message: 'Student deleted' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
