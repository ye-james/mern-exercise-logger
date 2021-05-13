const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const User = require('../models/user');


const ObjectID = mongoose.Types.ObjectId;

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
                res.status(201).json('Successfully created user')
            })
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}


exports.loginUser = async (req,res) => {
    
}