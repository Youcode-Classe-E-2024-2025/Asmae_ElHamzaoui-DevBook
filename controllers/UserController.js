const User = require('../models/User'); // <-- IMPORTER LE VRAI MODÈLE


class UserController {
  // Obtenir tous les utilisateurs
  static async getAllUsers() {
    const [rows] = await db.execute('SELECT * FROM users');
    return rows;
  }

  // Obtenir un utilisateur par son ID
  static async getUserById(id) {
    const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  }

 
}

module.exports = UserController; // <-- EXPORTER LA BONNE CLASSE

