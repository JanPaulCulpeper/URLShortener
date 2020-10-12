const Url = require('../models/url');

const deleteUrl = () => {
  return null;
};
const createShorturl = async (req, res) => {
  const { id, url, custom } = req.body;

  const urlDoc = await Url.findOne({ userID: id });

  if (urlDoc) {
    const update = {
      URLS: { ...urlDoc.URLS, [custom]: url }
    };
    await Url.findByIdAndUpdate({ _id: urlDoc._id }, update);
    res.status(200).json(update);
  } else {
    const newUrl = await Url.create({ userID: id, URLS: { [custom]: url } });
    res.status(201).json(newUrl);
  }
};

module.exports = {
  deleteUrl,
  createShorturl
};
