require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

exports.loginUser = async (req, res) => {
  // // get the errors from the validation middleware
  // const errors = validationResult(req);

  // // return 400 if validation failed
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // }

  const { username, password } = req.body;
  console.log(username, password);
  try {
    // see if the user exists
    const user = await User.findOne({ username });

    // return 400 if user doesn't exists in db
    // if (!user) {
    //     return res.status(400).json({
    //       errors: [
    //         {
    //           msg: 'Invalid username or password.',
    //         },
    //       ],
    //     });
    // };

    // check if password is correct
    const validPassword = await bcrypt.compare(
        password,
        user.password
    );
    
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
    const token = jwt.sign({email: user.email, id: user._id}, process.env.TOKEN_SECRET, {expiresIn: '1hr'});
    res.status(200).json({
        id: user._id, 
        name: user.name,
        token: token
    })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error');
  }
};

exports.signupUser = async (req, res) => {
  try {
    const userExist = await User.exists({ username: req.body.user.username });
    if (userExist) {
      res.status(409).json('Conflict: username already exists');
    } else {
      const hashedPassword = await bcrypt.hash(req.body.user.password, 10);
      const newUser = new User({ ...req.body.user, password: hashedPassword });
      newUser.save().then(result => {
        res.status(201).json({ message: 'Successfully created user' });
      });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

