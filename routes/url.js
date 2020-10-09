const { Router } = require('express');
const { deleteUrl, createShorturl } = require('../controllers/url');

const router = Router();

router.post('/delete', deleteUrl);
router.post('/create', createShorturl);

module.exports = router;
