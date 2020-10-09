const { Router } = require('express');
const { deleteUrl, getShorturl, addUrl } = require('../controllers/url');

const router = Router();

router.post('/deleteUrl', deleteUrl);
router.post('/addUrl', addUrl);
router.get('/getShorturl', getShorturl);

module.exports = router;
