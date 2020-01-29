var mongoose = require("mongoose");

    // mongoose model for todos
    var UserSchema = mongoose.Schema({
        username: String
    });

    var User = mongoose.model("User", UserSchema);

    module.exports = User;

