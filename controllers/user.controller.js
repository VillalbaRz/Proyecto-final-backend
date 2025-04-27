const User = require('../models/user.model');

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Buscar todos los usuarios
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
  const { nombre, email, password, rol } = req.body;

  const newUser = new User({
    nombre,
    email,
    password,
    rol
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
