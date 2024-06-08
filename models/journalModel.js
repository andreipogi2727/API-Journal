const mongoose = require('mongoose')

const journalSchema = mongoose.Schema
(
    {
        rate:
        {
            type: Number,
            
        },

        summary:
        {
            type: String,
            
        },

        goals:
        {
            type: String,
            
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