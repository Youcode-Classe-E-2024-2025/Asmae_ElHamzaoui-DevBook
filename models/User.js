const db = require('../config/database');

class User {
  static async getAllUsers() {
    const [rows] = await db.execute('SELECT * FROM users');
    // Exclure les mots de passe par sécurité si cette liste est exposée
    return rows.map(user => {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    });
  }

  // Obtenir un utilisateur par son ID
  static async getUserById(id) {
    const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
     if (rows.length === 0) {
        return null; // Ou lancer une erreur si préféré
    }
    // Exclure le mot de passe
    const { password, ...userWithoutPassword } = rows[0];
    return userWithoutPassword;
  }

  
  
}

module.exports = User;
