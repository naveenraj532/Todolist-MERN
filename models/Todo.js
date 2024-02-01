const mongoose = require('mongoose');

const todo = new mongoose.Schema({

    taskName:{

        type: String,
        require: true
    },

    taskStatus:{

        type: String,
        require: true
    },

    deadline:{

        type: String,
        require: true
    }
});

const TodoModel = mongoose.model("Todolist",todo)

module.exports = TodoModel;

