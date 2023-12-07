const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    username: {
        type: String,
        required: [true, "Username is required"],
    },  
    date: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: Boolean,
        default: false,
    },
    priority: {
        type: String,
        default: "low",
    },
});

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = TaskModel;

