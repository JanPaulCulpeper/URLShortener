const { Router } = require('express');
const {
  verifyAuth,
  signupPost,
  loginPost,
  logoutGet
} = require('../controllers/auth');

const router = Router();

router.post('/signup', signupPost);
router.post('/login', loginPost);
router.get('/verify', verifyAuth);
router.get('/logout', logoutGet);

module.exports = router;
