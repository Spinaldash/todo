'use strict';

var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
  title: {type: String, required: true},
  dueDate: {type: Date, default: Date.now, required: true},
  createdAt: {type: Date, default: Date.now, required: true},
  priority: {type: String, default: 'low'},
  tags: [{type: String}],
  userId: {type: mongoose.Schema.ObjectId, ref: 'User'},
  isCompleted: {type: Boolean, default: false}
});

// itemSchema.pre('save', function(next){
//   if(this.isNew){
//     this.tags = this.tags[0].split(',').map(function(e){return e.trim().toLowerCase();});
//
//   }
// })


module.exports = mongoose.model('Item', itemSchema);
