const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./user.model');

const router = express.Router();

router.post('/register', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send({ user });
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user || !await bcrypt.compare(req.body.password, user.password)) {
    return res.status(401).send({ error: 'Invalid login credentials' });
  }
  const token = jwt.sign({ _id: user._id }, 'MY_SECRET_KEY');
  res.send({ user, token });
});

module.exports = router;
