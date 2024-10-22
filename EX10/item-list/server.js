// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/itemDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define a Mongoose schema and model
const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    quantity: Number,
});

const Item = mongoose.model('Item', itemSchema);

// API endpoint to add a new item
app.post('/api/items', async (req, res) => {
    const { name, description, quantity } = req.body;

    const newItem = new Item({ name, description, quantity });
    await newItem.save();
    res.status(201).json(newItem);
});

// API endpoint to get all items
app.get('/api/items', async (req, res) => {
    const items = await Item.find();
    res.status(200).json(items);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
