const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 


const app = express();
const PORT = process.env.PORT || 8000;
const jwt = require('jsonwebtoken');


const logRoutes = require('./routes/log');
const exerciseRoute = require('./routes/exercises')
const userRoute = require('./routes/user')
//Set up express

app.use(express.json());
app.use(cors())



app.use('/exercises', exerciseRoute);
app.use('/log', logRoutes);
app.use('/user', userRoute);
app.use('/', (req,res) => {
    res.send('Hello from server');
})



const client = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res => {
    console.log('Successfully connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);   
    })
}).catch(err => {console.log('Error connecting to MongoDB' + err)})

