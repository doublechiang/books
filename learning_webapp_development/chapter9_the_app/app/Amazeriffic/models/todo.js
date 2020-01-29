var mongoose = require("mongoose");

    // mongoose model for todos
    var ToDoSchema = mongoose.Schema({
        description: String,
        tags: [ String]
    });

    var ToDo = mongoose.model("ToDo", ToDoSchema);

    module.exports = ToDo;

