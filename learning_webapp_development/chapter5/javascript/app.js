var main = function () {
    "use strict";

    $.getJSON("cards/aceOfSpades.json", function(card) {
        // print the card to the console
        console.log(card)

        var $cardParagraph = $("<p>");
        $cardParagraph.text(card.rank + " of " + card.suit);
        $("main").append($cardParagraph);
    });

    $.getJSON("cards/hand.json", function(hand) {

        var $list = $("<ul>");
        // iterate over it using forEach loop
        hand.forEach(function(card) {
            // create a list item
            var $card = $("<li>");
            $card.text(card.rank + " of " + card.suit);
            $list.append($card);
        })
        $("main").append($list);
    });

};

$(document).ready(main);
