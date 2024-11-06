const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

router.get('/home', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

router.get('/about', (req, res) => {
  res.render('index', { title: 'About Me' });
});

router.get('/projects', (req, res) => {
  res.render('index', { title: 'My Projects' });
});

router.get('/contact', (req, res) => {
  res.render('index', { title: 'Contact Me' });
});

module.exports = router;
