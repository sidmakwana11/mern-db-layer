const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  image: { data: Buffer,type: String } 
});

module.exports = mongoose.model('Todo', TodoSchema);
