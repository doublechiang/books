var express = require("express"),
    http = require("http"),
    app;

app = express();
http.createServer(app).listen(3000);

app.use(express.static(__dirname + "/client");

app.get("/hello", function(req, res) {
    res.send("Hello World!");
});

app.get("/goodbye", function(req, res) {
    res.send("Goodbye World!");
});
