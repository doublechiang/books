var main = function (toDoObjects) {
    var toDos = toDoObjects.map(function(toDo) {
        // return the description
        return toDo.description;
    });

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        // create a click handler for this element
        $element.on("click", function () {
            var $content,
                $input,
                $button,
                i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                // newest first, so we have to go through
                // the array backwards
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                // oldest first, so we go through the array forwards
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                // tags page code
                var tags = []
                toDoObjects.forEach(function(toDo) {
                    toDo.tags.forEach(function(tag) {
                        // make sure the tag is not already in the tag array
                        if (tags.indexOf(tag) === -1) {
                            tags.push(tag);
                        }
                    })
                });

                var tagObjects = tags.map(function(tag) {
                    // find all to-do objects that contain that tag
                    var toDosWithTag = [];
                    toDoObjects.forEach(function(toDo) {
                        if(toDo.tags.indexOf(tag) !== -1 ){
                            toDosWithTag.push(toDo.description);
                        }
                    });
                    console.log(toDosWithTag)
                    return {"name": tag, "toDos": toDosWithTag };
                });
            
                tagObjects.forEach(function(tag) {
                    var $tagName=$("<h3>").text(tag.name);
                    $content=$("<ul>");

                    tag.toDos.forEach(function(description) {
                        var $li = $("<li>").text(description);
                        $content.append($li);
                    });

                    $("main .content").append($tagName);
                    $("main .content").append($content);

                });
                console.log($content);
            } else if ($element.parent().is(":nth-child(4)")) {
                // input a new to-do
                $input = $("<input>").addClass("description"),
                $inputLabel = $("<p>").text("Description"),
                $tagInput = $("<input>").addClass("tags"),
                $tagLabel = $("<p>").text("Tags: "),
                $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        var description = $input.val();
                        tags = $tagInput.val().split(",");
                        newToDo = {"description": description, "tags": tags}
                        // here we'll do a quick post to our todos route
                        $.post("todos", newToDo, function (result) {
                            // this callback is called when server response
                            console.log(result);
                            // wait for the server response then push the result
                            toDoObjects.push(newToDo);
                        });
                        // update toDos
                        toDos = toDoObjects.map(function(toDo) {
                            return toDo.description;
                        })
                        $input.val("");
                        $tagInput.val("");
                    };
                });

                $content = $("<div>").append($inputLabel)
                                    .append($input)
                                    .append($tagLabel)
                                    .append($tagInput)
                                    .append($button);

               /* Alternatively append() allows multiple arguments so the above
                can be done with $content = $("<div>").append($input, $button); */
            }

            $("main .content").append($content);

            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(function() {
    $.getJSON("todos.json", function(toDoObjects) {
        // call main function with to-dos as an argument
        main(toDoObjects);
    })

});
