// const express = require('express');
// const bodyParser = require( 'body-parser');
// const dotenv = require('dotenv');
// const cors = require('cors');

// const Routes = require('./server/route.js');
// const Connection = require('./database/db.js');

// const app = express();


// dotenv.config();

// app.use(bodyParser.json({extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// app.use('/', Routes);

// // const USERNAME = process.env.DB_USERNAME;
// // const PASSWORD = process.env.DB_PASSWORD;

// const PORT = '8080';

// // Connection(USERNAME, PASSWORD);
// Connection()
 
// app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const Routes = require('./server/route.js');

dotenv.config();

const app = express();

// Middleware setup
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.URL || 'your-default-mongo-uri';

// Database Connection
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('✅ Database Connected Successfully');
    } catch (error) {
        console.error('❌ Database Connection Error:', error.message);
        process.exit(1);
    }
};

// Start Server
app.listen(PORT, async () => {
    await connectDB();
    console.log(`🚀 Server is running successfully on PORT ${PORT}`);
});
