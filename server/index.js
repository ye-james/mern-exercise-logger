const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); 

const logRoutes = require('./routes/log');

//Set up express
const app = express();
const PORT = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(cors())
app.use('/log', logRoutes);

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

