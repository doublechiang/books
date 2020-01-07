var main = function () {
    "use strict";
    $(".comment-input button").on("click", function(event) {
        if ($(".comment-input input").val() !== "") {
            var $new_comment =$("<p>").text($(".comment-input input").val());
            $(".comments").append($new_comment);
            $(".comment-input input").val("");
        }
    });
};

$(document).ready(main);
