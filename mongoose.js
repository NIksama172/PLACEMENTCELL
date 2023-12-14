
// const mongoose = require("mongoose");

// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://localhost:27017/iamROARe_placementCell");


// connection of mongoDB database

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://nikitasamant324:9ObD3XJylUcmq6Gy@cluster0.ociy7ai.mongodb.net/?retryWrites=true&w=majority' ,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));

// const db= mongoose.connection;
// db.on("error", console.error.bind(console,"Error in connection to Mongodb"));


// db.once("open", function(){
//     console.log("Successfully connected to Database :: MongoDB");

    
// });

// module.exports =db;
