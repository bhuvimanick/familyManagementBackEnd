const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Story = mongoose.model("Story");

router.use(express.json());
    

router.post('/', (req, res) => {
    console.log("req", req.body);
   
    let store = new Story();
    store.name = req.body.name;
    store.description = req.body.description;
    store.save((err, doc) => {
        if(err){
            res.send(err)
        }else{
            console.log("Succeed on creating stories...")
            res.send(doc)
        }
    })
});

module.exports = router;