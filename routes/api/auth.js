const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');


// User Model
const User = require('../../models/Users');

router.post('/', (req, res) => {
  const { email, password } = req.body;

  // Simple validation
  if(!email || !password) {
    return res.status(400).json({ msg: 'Please Enter all the Fields' });
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if(!user) return res.status(400).json({ msg: 'User Does not Exist' });

      // Validate password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

          jwt.sign(
            { id: user.id },
            require("../../config/Keys.js").jwtSecret,
            { expiresIn: 3600 },
            (err, token) => {
              if(err) throw err; 
              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email
                }
              });
            }
          )  
        })
      })
    });

// @route   Get api/auth/user
// @desc    Auth user data
// @access  Private
router.get("/user", auth, (req, res) => {
    User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});


module.exports = router;
