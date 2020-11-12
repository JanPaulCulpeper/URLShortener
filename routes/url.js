const { Router } = require('express');
const { deleteUrl, createShorturl, fetchUrls } = require('../controllers/url');

const router = Router();

router.post('/delete', deleteUrl);
router.post('/create', createShorturl);
router.get('/all', fetchUrls);

module.exports = router;
