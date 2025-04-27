const express = require('express');
const router = express.Router();
const { getUsers, createUser } = require('../controllers/user.controller');

// Rutas
router.get('/', getUsers);
router.post('/', createUser);

module.exports = router;
