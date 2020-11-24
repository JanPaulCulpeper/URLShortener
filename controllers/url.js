const Url = require('../models/url');

const createShorturl = async (req, res) => {
  const { url, custom } = req.body;
  const { userId } = req;

  if (!url || !custom) res.status(400).end('Cannot have empty fields!');
  try {
    const urlDoc = await Url.findOne({ userID: userId });
    if (urlDoc) {
      const update = {
        URLS: { ...urlDoc.URLS, [custom]: url }
      };
      await Url.findByIdAndUpdate({ _id: urlDoc._id }, update);
      res.status(201).json(update);
    } else {
      const newUrl = await Url.create({
        userID: userId,
        URLS: { [custom]: url }
      });
      res.status(201).json(newUrl.URLS);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

const fetchUrls = async (req, res) => {
  const { userId } = req;
  try {
    const urlDoc = await Url.findOne({ userID: userId });

    if (urlDoc) res.json(urlDoc.URLS);
    else res.json([]);
  } catch (err) {
    res.status(400).json(err);
  }
};

const deleteUrl = async (req, res) => {
  const { userId } = req;
  const { key } = req.body;

  const urlDoc = await Url.findOne({ userID: userId });

  if (urlDoc) {
    delete urlDoc.URLS[key];
    const update = {
      URLS: { ...urlDoc.URLS }
    };

    await Url.findByIdAndUpdate({ _id: urlDoc._id }, update);
    res.status(200).json(urlDoc.URLS);
  } else {
    res.status(404).end();
  }
};

module.exports = {
  fetchUrls,
  createShorturl,
  deleteUrl
};
