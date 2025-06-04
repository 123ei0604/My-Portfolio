const express = require('express');
const Project = require('../models/Project');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Authentication middleware
function auth(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'No token provided' });
  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Get all projects (public)
router.get('/', async (req, res) => {
  const projects = await Project.find().populate('user', 'username');
  res.json(projects);
});

// Get a user's projects
router.get('/mine', auth, async (req, res) => {
  const projects = await Project.find({ user: req.userId });
  res.json(projects);
});

// Create a new project
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, imageUrl, githubUrl, demoUrl } = req.body;
    const project = new Project({
      title,
      description,
      imageUrl,
      githubUrl,
      demoUrl,
      user: req.userId
    });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a project
router.put('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true }
    );
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a project
router.delete('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ _id: req.params.id, user: req.userId });
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json({ message: 'Project deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;