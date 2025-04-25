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

  
  
}

module.exports = User;
