// server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.log('MongoDB connection error:', error));

// User Sc
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
});

const User = mongoose.model('User', userSchema);

// Register Route
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Email already exists' });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
        res.json({ message: 'Login successful', userId: user._id });
    } else {
        res.status(400).json({ error: 'Invalid email or password' });
    }
});

// Protected Route: Fetch Movies
app.get('/movies', async (req, res) => {
    const { userId } = req.query;

    // Verify user exists in the database (minimal check)
    const user = await User.findById(userId);
    if (user) {
        res.json({ message: 'Access to movies granted' });
    } else {
        res.status(401).json({ error: 'Unauthorized access' });
    }
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
