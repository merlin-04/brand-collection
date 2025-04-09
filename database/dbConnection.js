const mongoose = require('mongoose')

const connectionString = process.env.DBCONNECTIONSTRING

mongoose.connect(connectionString).then(res => {
    console.log("MongoDB Atlas connected successfully with PF Server");

}).catch(err => {
    console.log("Connection failed");
    console.log(err);
})