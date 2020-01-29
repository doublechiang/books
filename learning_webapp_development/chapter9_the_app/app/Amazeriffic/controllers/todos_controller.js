var ToDo = require("../models/todo.js"),
    ToDosController = {};

ToDosController.index =  function(req, res) {
    ToDo.find({}, function(err, toDos) {
        res.json(toDos);
    });
};

ToDosController.create = function(req, res) {
    var newToDo = new ToDo({
        "description" : req.body.description,
        "tags" : req.body.tags 
    });
    console.log(newToDo);
    newToDo.save(function(err, result) {
        if (err !== null) {
            console.log(err);
        } else {
            // client expect all of the todo items to be returned.
            ToDo.find({}, function(err, result) {
                res.json(result);
            });
        }
    });

};

module.exports= ToDosController;