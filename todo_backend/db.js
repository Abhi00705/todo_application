const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.mongo_url).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection failed:', err));

const todo_schema= mongoose.Schema({
    title: String,
    description: String,
    complete:Boolean
})

const todo = mongoose.model('todos', todo_schema);

module.exports ={
    todo
}