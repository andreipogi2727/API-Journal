// journalRoute.js

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { createJournal, deleteJournal, getJournals, getJournalByRate, getJournalsSorted } = require('../controllers/journalController');



// Get all journals
router.get('/', getJournals);

// Get journals with rate
router.get('/rate/:rate', getJournalByRate);

// Create a journal
router.post('/',createJournal);

// Delete a journal by ID
router.delete('/:id', deleteJournal);

// Get sorted journals
router.get('/sort/:field/:order', getJournalsSorted);

module.exports = router;
