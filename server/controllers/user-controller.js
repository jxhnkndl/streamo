const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
  // get single user details by id, username, or email

  // create new user
  async createUser(req, res) {
    const user = await User.create(req.body);

    if (!user) {
      return res.status(400).json({ msg: 'Failed to create user' });
    }

    const token = signToken(user);

    res.status(200).json({ token, user });
  },

  // login user
  async login(req, res) {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const isValidPassword = user.checkPassword(req.body.password);

    if (!isValidPassword) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    const token = signToken(user);

    res.status(200).json({ token, user });
  },

  // add friend

  // save movie

  // delete movie
};