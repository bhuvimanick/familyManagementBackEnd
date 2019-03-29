const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    name: {type: String},
    description: {type: String}
})
    

mongoose.model('Story', storySchema)