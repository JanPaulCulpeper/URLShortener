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

module.exports = redirect;
