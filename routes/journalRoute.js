const express = require('express')
const router = express.Router();
const {getJournals} = require('../controllers/journalController')
const {getJournalByRate} = require('../controllers/journalController')
const {createJournal} = require('../controllers/journalController')

//get journals
router.get('/', getJournals);

//get journals with rate
router.get('/:rate', getJournalByRate)

//create a journal
router.post('/', createJournal)

module.exports = router