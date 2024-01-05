const mongoose = require('mongoose')

const journalSchema = mongoose.Schema
(
    {
        rate:
        {
            type: int,
            required: [true, "Rate how you feel"]
        },

        summary:
        {
            type: String,
            required: [true, "Please enter a summary of your day"]
        },

        goals:
        {
            type: String,
            required : [true, "Please enter a goal"]
        },

        image:
        {
            type: String,
            required: false,
        }
    },
    {
        timestamps:true
    }

)

const Journal = mongoose.model('Journal', journalSchema);

module.exports = Product;