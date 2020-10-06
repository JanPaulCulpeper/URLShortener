const jwt = require('jsonwebtoken');
const User = require('../models/user');

const handleErrors = (err) => {
  const errors = { email: '', password: '' };

  if (err.message.includes('Incorrect email')) {
    errors.email = 'The email you entered is not valid';
  }
  if (err.message.includes('Incorrect password')) {
    errors.password = 'The password you entered is incorrect';
  }
  if (err.code === 11000) {
    errors.email = 'The email you entered is already registered';
  }
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge
  });
};

const signupPost = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.cookie('t2gpr', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};
const loginPost = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('t2gpr', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const logoutGet = async (req, res) => {
  await res.cookie('jwt', '', { maxAge: 1 });
  res.status(200).json({ user: null });
};

const verifyAuth = async (req, res) => {
  const token = req.cookies.t2gpr;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.json({ user: null });
      } else {
        res.status(200).json({ user: decodedToken.id });
      }
    });
  } else {
    res.json({ user: null });
  }
};

module.exports = {
  verifyAuth,
  signupPost,
  loginPost,
  logoutGet
};
