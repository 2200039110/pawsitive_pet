const express = require('express');
const Pet = require('../models/Pet');
const multer = require('multer');
const router = express.Router();

// Configure multer for image upload (store in memory or disk)
const storage = multer.memoryStorage(); // or use diskStorage for saving to disk
const upload = multer({ storage: storage });

// Add a new pet (with image)
router.post('/', upload.single('image'), async (req, res) => {
  const { name, type, age, price, location, description } = req.body;
  let imageUrl = '';

  // If you want to store the image as a base64 string in MongoDB (not recommended for large images)
  if (req.file) {
    imageUrl = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
  }

  const pet = new Pet({
    name,
    type,
    age,
    price,
    location,
    description,
    image: imageUrl
  });

  await pet.save();
  res.status(201).json(pet);
});

// Get all pets
router.get('/', async (req, res) => {
  const pets = await Pet.find();
  res.json(pets);
});

module.exports = router;
