const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    trim: true,
    default: '',
    unique: true,
    required: [true, 'Please enter a user name']
  },
  email: {
    type: String,
    trim: true,
    default: '',
    unique: true,
    required: [true, 'Please enter an email address'],
    validate: [isEmail, 'Please enter a valid email address']
  },
  password: {
    type: String,
    trim: true,
    default: '',
    required: [true, 'Please enter a password'],
    minlength: [8, 'Password must be at least 8 characters']
  }
});

async function hash(next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
}

userSchema.pre('save', hash);

async function verifyPassword(email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('Incorrect password');
  }

  throw Error('Incorrect email');
}

userSchema.statics.login = verifyPassword;

module.exports = mongoose.model('user', userSchema);
