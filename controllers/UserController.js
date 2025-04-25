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

  
  static async createUser(name, email, password, role = 'client') {
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the plain text password
    const [result] = await db.execute(
      // --- CORRECTED SQL ---
      // Use the actual column name 'password' from your CREATE TABLE statement
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      // --- END CORRECTION ---
      // Make sure you insert the HASHED password, not the original plain text one
      [name, email, hashedPassword, role]
    );
    return result.insertId;
  }

 
}

module.exports = UserController; // <-- EXPORTER LA BONNE CLASSE

