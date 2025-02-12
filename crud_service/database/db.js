const mongoose = require('mongoose');
const env =  require('dotenv')
env.config()

const Connection = async() => {
    try {
        await mongoose.connect(process.env.URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true, // Fixes deprecation warnings
        });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
        process.exit(1);
    }
}

// Use JavaScript's built-in Promise instead of deprecated Mongoose promise
mongoose.Promise = global.Promise;

module.exports= Connection;