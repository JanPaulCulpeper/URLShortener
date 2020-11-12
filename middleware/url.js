const jwt = require('jsonwebtoken');
const Url = require('../models/url');

const redirect = async (req, res, next) => {
  const custom = req.path.substring(1);

  const urlDoc = await Url.findOne({
    [`URLS.${custom}`]: { $exists: true }
  });

  if (urlDoc) {
    res.redirect(301, urlDoc.URLS[custom]);
  } else {
    next();
  }
};

const authPages = async (req, res, next) => {
  const token = req.cookies.urlshort;

  if (['/dashboard'].includes(req.path)) {
    if (token) {
      jwt.verify(token, process.env.JWT_SECRET, (err) => {
        if (err) {
          res.redirect('/login');
        }
        next();
      });
    } else {
      res.redirect('/login');
    }
  } else next();
};

const requireAuth = async (req, res, next) => {
  const token = req.cookies.urlshort;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.redirect('/');
      } else {
        req.userId = decodedToken.id;
        next();
      }
    });
  } else {
    res.redirect('/');
  }
};

module.exports = { requireAuth, redirect, authPages };
