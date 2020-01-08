var main = function() {
    "use strict";

    var $content=$("<div>Hello World!</div>").hide();
    var $morecontent=$("<div>Goodbye World!</div>").hide();
    $("body").append($content);
    $content.slideDown(2000, function() {
        $("body").append($morecontent);
        $morecontent.fadeIn();
    });
};

$(document).ready(main);