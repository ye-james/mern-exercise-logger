require('dotenv').config(); 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const jwt = require('jsonwebtoken');


exports.loginUser = async(req, res)=> {
    try {
        if ( !(req.body.user.username || req.body.user.password)) {
            res.sendStatus(403).json({message: 'Missing username or password'})
        }
        const userExist = await User.findOne({username: req.body.user.username})
        if(userExist) {
            const validPassword = await bcrypt.compare(req.body.user.password, userExist.password);
            if(validPassword) {
                const token = jwt.sign({email: userExist.email, id: userExist._id}, process.env.TOKEN_SECRET, {expiresIn: '1hr'});
                res.status(200).json({
                    message: 'Successfully logged in!',
                    data: {
                        id: userExist._id, 
                        name: userExist.name,
                        token: token}
                })
            }
            else {
                res.status(400).json({message: 'Incorrect password'})
            }
        } 
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


exports.signupUser = async(req, res)=> {
    try{
        const userExist = await User.exists({username: req.body.user.username})
        if(userExist) {
            res.status(409).json('Conflict: username already exists');
        } else {
            const hashedPassword = await bcrypt.hash(req.body.user.password, 10);
            const newUser = new User({...req.body.user, password: hashedPassword});
            newUser.save().
            then(result => {
                res.status(201).json({message: 'Successfully created user'})
            })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}


function generateAccessToken(username) {
    return jwt.sign(username, process.env.TOKEN_SECRET, {expiresIn: '1hr'})
}