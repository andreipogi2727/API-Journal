const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const Journal = require('./models/journalModel')
const app = express()
const journalRoute = require('./routes/journalRoute')
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.use('/journals', journalRoute )
const path = require('path');
const PORT = process.env.PORT || 3000; // Use port 3000, or use a different port if 3000 is occupied




mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Successfully connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Journal API app is running on port ${PORT}`);
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
});
// server.js

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'firstPage.html'));
});

app.get('/secondPage', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'secondPage.html'));
});





