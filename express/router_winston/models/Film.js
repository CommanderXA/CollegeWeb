const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Country",
    },
    duration: {
        type: Number,
        min: 1,
    },
    yearOfIssue: {
        type: Number,
        min: 1900,
    },
    age: {
        type: Number,
        min: 0,
        max: 18
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    }],
    linkImg: {
        type: String,
    },
    linkVideo: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model("Film", filmSchema);