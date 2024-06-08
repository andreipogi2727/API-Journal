const Journal = require('../models/journalModel');

// Get all journals
const getJournals = async (req, res) => {
    try {
        const journals = await Journal.find({});
        res.status(200).json(journals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get journals by rate
const getJournalByRate = async (req, res) => {
    const { rate } = req.params;
    try {
        const journals = await Journal.find({ rate: rate });
        res.status(200).json(journals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a journal
const createJournal = async (req, res) => {
    try {
        const journal = await Journal.create(req.body);
        res.status(200).json(journal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a journal
const deleteJournal = async (req, res) => {
    const { id } = req.params;
    console.log("this is this the id", id)
    try {
        await Journal.findByIdAndDelete(id);
        res.status(200).json({ message: 'Journal deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get sorted journals
const getJournalsSorted = async (req, res) => {
    const { field, order } = req.params;
    try {
        const journals = await Journal.find({}).sort({ [field]: order === 'asc' ? 1 : -1 });
        res.status(200).json(journals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getJournals,
    getJournalByRate,
    createJournal,
    deleteJournal,
    getJournalsSorted,
};
