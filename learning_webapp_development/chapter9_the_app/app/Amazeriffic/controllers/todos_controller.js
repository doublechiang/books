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

ToDosController.show =  function(req, res) {
    var id = req.params.id;
    // find the todos based on id
    ToDo.find({"_id":id}, function(err, todo) {
        if (err != null) {
            res.json(err);
        } else {
            if (todo.length > 0) {
                res.json(todo[0]);
            } else {
                res.send("Not found");
            }
        }
    });
};



module.exports= ToDosController;