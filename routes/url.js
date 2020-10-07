const { Router } = require('express');
const {
  deleteUrl,
  createShorturl,
  addUrl,
  deleteUrloutofuse
} = require('../controllers/url');

const router = Router();

router.post('/usernChange', deleteUrl);
router.post('/passChange', createShorturl);
router.get('/list', addUrl);
router.get('/extend', deleteUrloutofuse);

module.exports = router;
