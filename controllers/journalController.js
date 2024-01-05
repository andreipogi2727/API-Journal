const Journal = require('../models/journalModel')

//get all journals
const getJournals = async(req,res) =>
{
    
    try {
        const journal = await Journal.find({});
        res.status(200).json(journal);
    } catch (error) {
        res.status(500).json({message:error.message})
        console.log(error.message)
        
    }
}

const getJournalByRate = async(req,res) =>
{
    const {rate} = req.params
    try {
        const journal = await Journal.find({rate: rate});
        res.status(200).json(journal);
    } catch (error) {
        res.status(500).json({message:error.message})
        console.log(error.message)
    }
}

module.exports =
{
    getJournals,
    getJournalByRate,
}