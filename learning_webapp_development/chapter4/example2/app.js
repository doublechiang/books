var main = function () {
    "use strict";
    $(".comment-input button").on("click", function(event) {
        if ($(".comment-input input").val() !== "") {
            var $new_comment =$("<p>").text($(".comment-input input").val());
            $(".comments").append($new_comment);
            $(".comment-input input").val("");
        }
    });

    $(".comment-input input").on("keypress", function(event) {
        //console.log("key pressed" + event.keyCode);
        var $new_comment;
        if (event.keyCode ===13) {
            console.log("key pressed" + event.keyCode);
            if ($(".comment-input input").val() !== "") {
                $new_comment =$("<p>").text($(".comment-input input").val());
                $(".comments").append($new_comment);
                $(".comment-input input").val("");
            }
        }

    });


};

$(document).ready(main);
