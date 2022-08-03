const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB =require('./db/conect');
require('dotenv').config();

app.use(express.json());
app.use('/api/v1/tasks',tasks);
app.use(express.static('./public'));

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {`Server listening on port ${port}`});
    } catch(error) {
        console.log(error);
    }
}

start();
