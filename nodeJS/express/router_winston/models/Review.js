const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    film: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Film",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    message: {
        type: String,
        required: true,
    },
    isApproved: {
        type: Boolean,
        required: true,
        default: false,
    }
}, { timestamps: true });

module.exports = mongoose.model("Review", reviewSchema)