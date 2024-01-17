const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'must provide name'],
        trim: true,
        minLength: [1, 'name can not be less than 1 character'],
        maxLength: [50, 'name can not be more than 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

module.exports = mongoose.model('Task', TaskSchema);

