const { Router } = require('express');
const {
  changeUsername,
  changePassword,
  urlList,
  extendSession
} = require('../controllers/user');

const router = Router();

router.post('/usernChange', changeUsername);
router.post('/passChange', changePassword);
router.get('/list', urlList);
router.get('/extend', extendSession);

module.exports = router;
