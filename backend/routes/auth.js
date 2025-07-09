const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, phone, password, role } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'Email already exists' });

  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ firstName, lastName, email, phone, password: hashed, role });
  await user.save();
  res.status(201).json({ message: 'User created' });
});

// Login
router.post('/login', async (req, res) => {
  const { email, password, role } = req.body;
  console.log('Login attempt:', { email, role });
  const user = await User.findOne({ email, role });
  console.log('User found:', user);
  if (!user) return res.status(400).json({ message: 'Invalid credentials or role' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign(
    { userId: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
  res.json({ token, user: { firstName: user.firstName, lastName: user.lastName, email: user.email, role: user.role } });
});

module.exports = router;
