# Modeling dta with Mongoose

## Models
A data model is an object representation of a collection of documents in a data store.

a data model consists of a schema

var CardSchema = mongoose.Schema({
    "rank" : String,
    "suit" : String
});

Once create the schema, building a model.
var Card = mongoose.model("Card", CardSchema);

more complicate schema

var BlogPostSchema = mongoose.Schema ({
    title: String,
    body: String,
    date: Date,
    comments : [String]
});

Create object based on model.

var c1 = new Card({"rank", "ace", "suit":"spades"});
var c2 = {"rank", "ace", "suit":"spades"};

So what's the difference?
We have built-in function for the object.
c1.save(function(err) {
    if (err != null) {
        console.log(err);
    }
})

Card.find( {}, function(err, cards) {
    if (err !== null) {
        console.log("Error: " + err);
    }
    Cards.forEach(function(card) {
        // print out all the cards.
    })    
});

