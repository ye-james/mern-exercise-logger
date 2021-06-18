const mongoose = require('mongoose');

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('Successfully connected to MongoDB');
    } catch (err) {
        console.log('Error connecting to MongoDB' + err);
        
        // Stop the server if we can't connect to db
        process.exit(1);
    }
}

module.exports = connectToDB;