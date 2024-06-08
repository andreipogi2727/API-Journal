const mongoose = require('mongoose')

const journalSchema = mongoose.Schema
(
    {
        rate:
        {
            type: Number,
            required: true,
            
        },

        summary:
        {
            type: String,
            required: true,
        },

        goals:
        {
            type: String,
            required: true,
            
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

module.exports = Journal;