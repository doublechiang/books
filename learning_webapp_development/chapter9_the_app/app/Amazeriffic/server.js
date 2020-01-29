var express = require("express"),
    http = require("http"),
    mongoose = require("mongoose"),
    // import ToDo model
    ToDo = require("./models/todo.js"),
    // import controller
    ToDosController = require("./controllers/todos_controller.js"),
    app=express();

    app.use(express.static(__dirname + "/client"));
    app.use(express.urlencoded());

    // connect to the data store in mongo
    mongoose.connect('mongodb://localhost/amazeriffic');

    // route
    app.get("/todos.json", ToDosController.index);
    app.post("/todos", ToDosController.create);

    http.createServer(app).listen(3000);


