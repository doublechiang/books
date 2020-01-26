var main = function (toDoObjects) {
    var tags = []
    toDoObjects.forEach(function(toDo) {
        toDo.tags.forEach(function(tag) {
            // make sure the tag is not already in the tag array
            if (tags.indexOf(tag) === -1) {
                tags.push(tag);
            }
        })
    });
    console.log(tags);

    var tagObjects = tags.map(function(tag) {
        // find all to-do objects that contain that tag
        var toDosWithTag = [];
        toDoObjects.forEach(function(toDo) {
            if(toDo.tags.indexOf(tag) !== -1 ){
                toDosWithTag.push(toDo.description);
            }
        });
        return {"name": tag, "toDos": toDosWithTag };
    });
    console.log(tagObjects);

};

$(document).ready(function() {
    $.getJSON("../todos.json", function(toDoObjects) {
        // call main function with to-dos as an argument
        main(toDoObjects);
    })

});