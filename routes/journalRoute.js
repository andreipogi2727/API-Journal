// journalRoute.js

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const { createJournal, deleteJournal, getJournals, getJournalByRate, getJournalsSorted } = require('../controllers/journalController');

// Middleware to validate journal creation request
const validateJournal = [
    body('rate').isInt({ min: 1, max: 10 }).withMessage('Rate must be an integer between 1 and 10'),
    body('summary').trim().escape(),
    body('goals').trim().escape(),
    body('image').isURL().withMessage('Image URL is not valid'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Get all journals
router.get('/', getJournals);

// Get journals with rate
router.get('/rate/:rate', getJournalByRate);

// Create a journal
router.post('/', validateJournal, createJournal);

// Delete a journal by ID
router.delete('/:id', deleteJournal);

// Get sorted journals
router.get('/sort/:field/:order', getJournalsSorted);

module.exports = router;
