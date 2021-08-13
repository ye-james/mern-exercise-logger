require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.getUserInfo = async (req, res) => {
  try {
    // get all fields except for the password
    const user = await User.findById(req.user.id).select('-password');

    // return the user info
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(401).json({ msg: 'Server error' });
  }
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // see if the user exists
    const user = await User.findOne({ username });

    // check if password is correct
    const validPassword = await bcrypt.compare(password, user.password);

    // return 400 if password is incorrect
    if (!validPassword) {
      return res.status(400).json({
        errors: [
          {
            msg: 'Invalid username or password.',
          },
        ],
      });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    // create json web token
    jwt.sign(
      payload,
      process.env.TOKEN_SECRET,
      { expiresIn: '1h' }, // options
      (err, token) => {
        // async callback
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.signupUser = async (req, res) => {
  const { name, username, password } = req.body;

  try {
    // see if the user exists
    let user = await User.findOne({ username });

    // return 400 if user already exists
    if (user) {
      res.status(400).json({
        errors: [
          {
            msg: 'User already exists',
          },
        ],
      });
    }

    user = new User({
      name,
      username,
      password,
    });

    // encrypt password
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    // save new user to db
    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    // create json web token
    jwt.sign(
      payload,
      process.env.TOKEN_SECRET,
      { expiresIn: '1hr' }, // options
      (err, token) => {
        // async callback
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
