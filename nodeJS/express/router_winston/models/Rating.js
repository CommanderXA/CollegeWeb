const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    film: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Film",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    ball: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
}, { timestamps: true });

module.exports = mongoose.model("Rating", ratingSchema);