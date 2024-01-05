const express = require('express')
const router = express.Router();
const {getJournals} = require('../controllers/journalController')
const {getJournalByRate} = require('../controllers/journalController')

//get journals
router.get('/', getJournals);

//get journals with rate
rputer.get('/:rate', getJournalByRate)