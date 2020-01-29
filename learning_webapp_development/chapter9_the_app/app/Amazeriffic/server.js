var express = require("express"),
    http = require("http"),
    mongoose = require("mongoose"),
    // import ToDo model
    ToDo = require("./models/todo.js"),
    app=express();

    app.use(express.static(__dirname + "/client"));
    app.use(express.urlencoded());

    // connect to the data store in mongo
    mongoose.connect('mongodb://localhost/amazeriffic');

    http.createServer(app).listen(3000);


app.get("/todos.json", function(req, res) {
    ToDo.find({}, function(err, toDos) {
        res.json(toDos);
    })
});

app.post("/todos", function(req, res) {
    console.log(req.body);

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
});

