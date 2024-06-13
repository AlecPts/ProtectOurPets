const express = require('express');
const router = express.Router();
const { test, getPoll, registerPoll } = require('../controllers/popControllers');

// Routes
router.get('/', test)
router.get('/poll', getPoll)
//-------------------------------
router.post('/registerpoll', registerPoll)


module.exports = router;