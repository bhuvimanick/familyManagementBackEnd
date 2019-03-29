const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/FamilyDB", {useNewUrlParser: true}, (err) => {
    if(err){
        console.log("Error in DB connection", err)
    }else{
        console.log("MongoDB connection succeeded")
    }
});

require('./stories.model');