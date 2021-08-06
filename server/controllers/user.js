require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

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

    // create json web token
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.TOKEN_SECRET,
      { expiresIn: '1hr' }
    );

    res.status(200).json({
      id: user._id,
      name: user.name,
      token: token,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.signupUser = async (req, res) => {
  const { name, username, password } = req.body;

  console.log(`${name} ${username} ${password}`);

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
      password
    });
  
    // encrypt password
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    // save new user to db
    await user.save();

    // create json web token
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.TOKEN_SECRET,
      { expiresIn: '1hr' }
    );

    res.status(200).json({
      id: user._id,
      name: user.name,
      token: token,
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
