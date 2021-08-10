const express = require('express');
const cors = require('cors');
require('dotenv').config(); 
const connectToDB = require('./config/db');
const logRoutes = require('./routes/log');
const exerciseRoute = require('./routes/exercises')
const routineRoute = require('./routes/routine')
const authRoute = require('./routes/auth')

const app = express();

// Connect to database
connectToDB();

// Middleware
app.use(express.json());
app.use(cors())

// Routes
app.use('/auth', authRoute);
app.use('/exercises', exerciseRoute);
app.use('/routine', routineRoute)
app.use('/log', logRoutes);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);   
})




