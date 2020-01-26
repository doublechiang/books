var main = function () {
    "use strict";

    $.getJSON("cards/aceOfSpades.json", function(card) {
        // print the card to the console
        console.log(card)

        var $cardParagraph = $("<p>");
        $cardParagraph.text(card.rank + " of " + card.suit);
        $("main").append($cardParagraph);
    });

};

$(document).ready(main);
