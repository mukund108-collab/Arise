const express = require('express');
const router = express.Router();
const { addActivity, getActivities } = require('../controllers/activityController');
const auth = require('../middleware/auth');

router.post('/log', auth, addActivity);
router.get('/', auth, getActivities);

module.exports = router;
