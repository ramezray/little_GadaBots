const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const token = req.header('x-auth-token');

  // Check for token
  if (!token)
    return res.status(401).json({ msg: 'No Token, Authorizaton Denied' });

  try {
    // Verify token
    const decoded = jwt.verify(token, require("../config/Keys").jwtSecret);
    // Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not Valid' });
  }
}

module.exports = auth;
