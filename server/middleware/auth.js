const jwt = require('jsonwebtoken');

//Grab token from client-side to validate
function auth(req, res, next) {
    //Check for token
    const token = req.heade('x-auth-token');

    if(!token) res.status(401).json({message: 'No token, authoriation denied'})

    try {
        //Verify token
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        //Add user to request from payload
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({message: 'Token is not valid'});
    }

}

modules.exports = auth;