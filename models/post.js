var mongoose = require("mongoose");
var mongoosePaginate = require('mongoose-paginate');

var postSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    userId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
});

postSchema.plugin(mongoosePaginate);

var Post = mongoose.model("Posts", postSchema);
module.exports = Post